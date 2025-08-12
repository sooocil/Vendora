export const prices = {
  base: 400,
  plus: 999,
  pro: 1299,
};

export function BasePlan() {
  return (
    <div>
      <div className="relative w-80 bg-white border border-gray-200 rounded-xl p-6 text-gray-900 shadow-lg hover:shadow-2xl transition-shadow">
        <div className="absolute -top-3 -left-3 bg-indigo-600 text-white px-5 py-1 rounded-tl-xl rounded-br-xl font-semibold text-sm select-none shadow-md">
          Most Popular
        </div>
        <h2 className="text-gray-900 text-center  text-xl font-semibold mb-1">Base Plan</h2>
        <p className="text-gray-600 mb-4 text-sm">
          For experienced developers and small teams.
        </p>
        <div className="flex items-center space-x-2 gap-4 mb-5">
          <span className="text-3xl flex  font-extrabold  text-zinc-900">
            <span>Rs.{" "}</span> 
            {prices.base}
          </span>
          <span className="text-zinc-800 text-sm text-balance">
            one-time payment{" "}
            <span className="text-zinc-500">plus local taxes</span>
          </span>
        </div>
        <button className="bg-indigo-600 hover:bg-indigo-700 hover:cursor-pointer transition rounded-xl text-white py-3 w-full font-semibold mb-6 shadow-sm">
          Buy now &rarr;
        </button>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-indigo-600 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z" />
            </svg>
            5 users license
          </li>
          <li className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-indigo-600 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z" />
            </svg>
            Access to all components
          </li>
          <li className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-indigo-600 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z" />
            </svg>
            Lifetime access
          </li>
          <li className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-indigo-600 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z" />
            </svg>
            Unlimited projects
          </li>
          <li className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-indigo-600 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z" />
            </svg>
            Customer support
          </li>
          <li className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-indigo-600 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z" />
            </svg>
            Free updates
          </li>
        </ul>
      </div>
    </div>
  );
}

export function PlusPlan() {
  return (
    <div>
      <div className="relative w-80 bg-white border border-gray-200 rounded-xl p-6 text-gray-900 shadow-lg hover:shadow-2xl transition-shadow">
        <h2 className="text-gray-900 text-center text-xl font-semibold mb-1">Plus Plan</h2>
        <p className="text-gray-600 mb-4 text-sm">
          For growing teams and agencies.
        </p>
        <div className="flex items-center space-x-2 gap-4 mb-5">
          <span className="text-3xl flex  font-extrabold  text-zinc-900">
            <span>Rs.{" "}</span> 
            {prices.plus}
          </span>
          <span className="text-zinc-800 text-sm text-balance">
            one-time payment{" "}
            <span className="text-zinc-500">plus local taxes</span>
          </span>
        </div>
        <button className="bg-indigo-600 hover:bg-indigo-700 transition rounded-xl text-white py-3 w-full font-semibold mb-6 shadow-sm">
          Buy now &rarr;
        </button>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-indigo-600 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z" />
            </svg>
            15 users license
          </li>
          <li className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-indigo-600 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z" />
            </svg>
            Access to all components
          </li>
          <li className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-indigo-600 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z" />
            </svg>
            Lifetime access
          </li>
          <li className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-indigo-600 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z" />
            </svg>
            Unlimited projects
          </li>
          <li className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-indigo-600 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z" />
            </svg>
            Priority support
          </li>
          <li className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-indigo-600 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z" />
            </svg>
            Free updates
          </li>
          <li className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-indigo-600 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z" />
            </svg>
            Custom components
          </li>
        </ul>
      </div>
    </div>
  );
}

export function ProPlan() {
  return (
    <div>
      <div className="relative w-80 bg-zinc-50 border border-gray-200 rounded-xl p-6 text-gray-900 shadow-xl hover:shadow-2xl transition-shadow">
        <h2 className="text-gray-900 text-center text-xl font-semibold mb-1">Pro Plan</h2>
        <p className="text-gray-600 mb-4 text-sm">
          For enterprises and large organizations.
        </p>
        <div className="flex items-center space-x-2 gap-4 mb-5">
          <span className="text-3xl flex  font-extrabold  text-zinc-900">
            <span>Rs.{" "}</span> 
            {prices.pro}
          </span>
          <span className="text-zinc-800 text-sm text-balance">
            one-time payment{" "}
            <span className="text-zinc-500">plus local taxes</span>
          </span>
        </div>
        <button className="bg-indigo-600 hover:bg-indigo-700 transition rounded-xl text-white py-3 w-full font-semibold mb-6 shadow-sm">
          Buy now &rarr;
        </button>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-indigo-600 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z" />
            </svg>
            Unlimited users
          </li>
          <li className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-indigo-600 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z" />
            </svg>
            Access to all components
          </li>
          <li className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-indigo-600 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z" />
            </svg>
            Lifetime access
          </li>
          <li className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-indigo-600 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z" />
            </svg>
            Unlimited projects
          </li>
          <li className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-indigo-600 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z" />
            </svg>
            Dedicated support
          </li>
          <li className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-indigo-600 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z" />
            </svg>
            Free updates
          </li>
          <li className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-indigo-600 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z" />
            </svg>
            Custom components
          </li>
          <li className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-indigo-600 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z" />
            </svg>
            White-labeling
          </li>
        </ul>
      </div>
    </div>
  );
}
