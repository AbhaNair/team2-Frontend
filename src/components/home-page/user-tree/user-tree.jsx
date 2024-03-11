import React, { useEffect, useState } from "react";
import Tree from "react-d3-tree";
import axios from "axios";
import { useCenteredTree } from "./helper";

const containerStyles = {
  maxWidth: "1000px",
  height: "100vh",
  marginBottom: "20px",
  background: "rgba(131, 137, 150,0.3)",
  borderRadius: "30px",
  overflow: "hidden",
};

const buttonStyle = {
  position: "relative",
  bottom: "0px",
  width: "250px",
  height: "210px",
  paddingTop: "16px",
  background: "#313236",
  borderRadius: "50px",
  color: "white",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};
const nameStyle = {
  fontSize: "16px",
};

const renderForeignObjectNode = ({
  nodeDatum,
  toggleNode,
  foreignObjectProps,
  handleDownNodeClick,
  handleUpNodeClick,
  id,
  managerIdForUpButton,
  toggleUpBottun,
}) => (
  <>
    <g>
      <foreignObject {...foreignObjectProps}>
        {console.log("managerId in forienObject: " + managerIdForUpButton)}
        {nodeDatum.attributes.managerId.length !== 0 &&
          nodeDatum.attributes.id === managerIdForUpButton &&
          toggleUpBottun && (
            <div style={{ textAlign: "center", marginTop: 1 }}>
              <button
                style={{
                  ...buttonStyle,
                  width: "5%",
                  height: "5%",
                  fontSize: "24px",
                  lineHeight: "inherit",
                  padding: 0,
                  //backgroundColor: "#28292D",
                  marginLeft: "113px",
                }}
                onClick={(event) =>
                  handleUpNodeClick(event, nodeDatum, toggleNode)
                }
              >
                +
              </button>
            </div>
          )}
        <button style={buttonStyle}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                overflow: "hidden",
                marginBottom: "10px",
              }}
            >
              <img
                src="./avatar.jpeg"
                alt="profile"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div style={nameStyle}>
              {nodeDatum.name} {id === nodeDatum.attributes.id ? "(ME)" : ""}
            </div>
            <div>Designation: {nodeDatum.attributes.designation}</div>
            <div>Level: {nodeDatum.attributes.level}</div>
            <div>Id: {nodeDatum.attributes.id}</div>
          </div>
        </button>
        {nodeDatum.attributes.reportees.length !== 0 && (
          <div style={{ textAlign: "center", marginTop: 1 }}>
            <button
              style={{
                ...buttonStyle,
                width: "5%",
                height: "5%",
                fontSize: "24px",
                lineHeight: "inherit",
                padding: 0,
                //backgroundColor: "#28292D",
                marginLeft: "113px",
              }}
              onClick={(event) =>
                handleDownNodeClick(event, nodeDatum, toggleNode)
              }
            >
              {nodeDatum.__rd3t.collapsed || nodeDatum.children.length === 0
                ? "+"
                : "-"}
            </button>
          </div>
        )}
      </foreignObject>
    </g>
  </>
);

export const UserTree = ({ id, managerid }) => {
  const [myTreeData, setMyTreeData] = useState(null);
  const [toggleUpBottun, settoggleUpBottun] = useState(true);
  const [managerIdForUpButton, setmanagerIdForUpButton] = useState(managerid);
  const [dimensions, translate, containerRef] = useCenteredTree();
  const nodeSize = { x: 300, y: 320 };
  const foreignObjectProps = {
    width: nodeSize.x,
    y: -100,
    height: nodeSize.y,
    x: -120,
  };

  const handleDownNodeClick = async (e, nodeDatum, toggleNode) => {
    if (nodeDatum !== undefined && nodeDatum.attributes !== undefined) {
      const { id } = nodeDatum.attributes;
      if (id !== undefined) {
        const reportees = await axios.get(
          `http://localhost:8888/getAllReporteesById/${id}`
        );
        let reporteesList = reportees.data;
        for (let i = 0; i < reporteesList.length; i++) {
          const element = reporteesList[i];
          if (element === null) continue;
          const node = {
            name: element?.name,
            attributes: {
              designation: element?.designation,
              level: element?.level,
              id: element?.employeeId,
              reportees: element?.reportees,
              managerId: element?.managerId,
            },
            children: [],
          };
          setMyTreeData((prevData) => {
            return bfsdownwards(id, prevData, node);
          });
        }
      }
    }
    toggleNode();
  };

  const handleUpNodeClick = async (e, nodeDatum, toggleNode) => {
    if (nodeDatum !== undefined && nodeDatum.attributes !== undefined) {
      const { id } = nodeDatum.attributes;
      if (id !== undefined) {
        const { data } = await axios.get(
          `http://localhost:8888/findById/${id}`
        );
        const managerId = data.managerId;
        const managerData = await axios.get(
          `http://localhost:8888/findById/${managerId}`
        );
        console.log("manager node detail start :");
        const node = {
          name: managerData?.data.name,
          attributes: {
            designation: managerData.data?.designation,
            level: managerData.data?.level,
            id: managerData.data?.employeeId,
            reportees: managerData.data?.reportees,
            managerId: managerData.data?.managerId,
          },
          children: [],
        };
        setMyTreeData((prevData) => {
          return bfsUpwards(id, prevData, node);
        });
        setMyTreeData(node);
        console.log(myTreeData);
        setmanagerIdForUpButton(managerId);
      }
    }
    settoggleUpBottun(false);
    toggleNode();
    settoggleUpBottun(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `http://localhost:8888/findById/${managerid}`
      );
      const reportees = await axios.get(
        `http://localhost:8888/getAllReporteesById/${managerid}`
      );
      let reporteesList = reportees.data;
      const children = [];
      for (let i = 0; i < reporteesList.length; i++) {
        const element = reporteesList[i];
        if (element === null) continue;
        const childData = {
          name: element.name,
          attributes: {
            designation: element.designation,
            level: element.level,
            id: element.employeeId,
            reportees: element.reportees,
            managerId: element.managerId,
          },
          children: [],
        };
        children.push(childData);
      }
      const newData = {
        name: data.name,
        attributes: {
          designation: data.designation,
          level: data.level,
          id: data.employeeId,
          reportees: data.reportees,
          managerId: data.managerId,
        },
        children: children,
      };
      setMyTreeData(newData);
    };
    fetchData();
  }, []);

  function bfsdownwards(id, tree, node) {
    const queue = [];
    queue.unshift(tree);
    while (queue.length > 0) {
      const currNode = queue.pop();
      if (currNode.attributes?.id === id) {
        if (
          !currNode.children.some(
            (child) => child.attributes.id === node.attributes.id
          )
        ) {
          currNode.children.push(node);
          return { ...tree };
        }
      }
      const len = currNode.children.length;
      for (let i = 0; i < len; i++) {
        queue.unshift(currNode.children[i]);
      }
    }
    return tree;
  }

  function bfsUpwards(id, tree, node) {
    const queue = [];
    queue.unshift(tree);
    while (queue.length > 0) {
      const currNode = queue.pop();
      if (currNode.attributes?.id === id) {
        node.children.push(currNode);
        return { ...tree };
      }
      const len = currNode.children.length;
      for (let i = 0; i < len; i++) {
        queue.unshift(currNode.children[i]);
      }
    }
    return tree;
  }

  return (
    <div className="App">
      <div id="treeWrapper" style={containerStyles} ref={containerRef}>
        {myTreeData && (
          <Tree
            data={myTreeData}
            pathFunc="step"
            separation={{ siblings: 1, nonSiblings: 1 }}
            orientation="vertical"
            translate={translate}
            dimensions={dimensions}
            nodeSize={nodeSize}
            centeringTransitionDuration={200}
            allowForeignObjects
            renderCustomNodeElement={(rd3tProps) =>
              renderForeignObjectNode({
                ...rd3tProps,
                foreignObjectProps,
                handleDownNodeClick,
                id,
                handleUpNodeClick,
                managerIdForUpButton,
                toggleUpBottun,
              })
            }
          />
        )}
      </div>
    </div>
  );
};
