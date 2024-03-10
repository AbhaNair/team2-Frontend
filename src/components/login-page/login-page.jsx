import { QuotesColumn } from "../quote-column/quote-column";

export default function Authentication() {
  return (
    <>
      <div className="flex min-h-full flex-1 ">
        <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24 bg-emerald-50">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <img
                className="h-32 w-auto ml-auto mr-auto"
                src="/logo.svg"
                alt="Your Company"
              />
              <h2 className="mt-8 text-5xl font-extrabold leading-9 tracking-tight text-emerald-950  text-center">
                Welcome back to Karamchari!
              </h2>
            </div>
            <div className="mt-20">
              <div>
                <form action="#" method="POST" className="space-y-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xl font-semibold leading-6 text-gray-900"
                    >
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block text-xl font-semibold leading-6 text-gray-900"
                    >
                      Password
                    </label>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-emerald-700 px-3 py-1.5 text-xl font-bold leading-6 text-white shadow-sm hover:bg-emerald-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
                    >
                      Sign in
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div
          className="w-full bg-cover hidden lg:block"
          style={{
            backgroundImage: 'URL("/login-bg.jpg")',
          }}
        >
          <div className="flex items-center justify-center h-full">
            <QuotesColumn />
          </div>
        </div>
      </div>
    </>
  );
}
