const Home = () => {
    return (
        <div>
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                <p className="text-gray-600 mt-1">Overview of platform activity and performance</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-red-50 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="text-gray-700 text-sm font-medium">Total Users</h3>
                        <span className="text-gray-500">👥</span>
                    </div>
                    <p className="text-3xl font-bold text-gray-900 mb-1">2,897</p>
                    <p className="text-green-600 text-sm">
                        <span>↑</span> +12.5% from last month
                    </p>
                </div>

                <div className="bg-blue-50 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="text-gray-700 text-sm font-medium">Study Materials</h3>
                        <span className="text-gray-500">💰</span>
                    </div>
                    <p className="text-3xl font-bold text-gray-900 mb-1">485</p>
                    <p className="text-green-600 text-sm">
                        <span>↑</span> +15 from last month
                    </p>
                </div>

                <div className="bg-green-50 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="text-gray-700 text-sm font-medium">Study Materials</h3>
                        <span className="text-gray-500">📚</span>
                    </div>
                    <p className="text-3xl font-bold text-gray-900 mb-1">485</p>
                    <p className="text-green-600 text-sm">
                        <span>↑</span> +15 from last month
                    </p>
                </div>

                <div className="bg-yellow-50 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="text-gray-700 text-sm font-medium">Avg. Exam Score</h3>
                        <span className="text-gray-500">📊</span>
                    </div>
                    <p className="text-3xl font-bold text-gray-900 mb-1">78.5%</p>
                    <p className="text-red-600 text-sm">
                        <span>↓</span> -2.1% from last month
                    </p>
                </div>
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">User Growth</h3>
                    <p className="text-gray-600 text-sm mb-4">Total registered users over time</p>
                    <div className="h-64 flex items-center justify-center bg-white rounded-lg">
                        <p className="text-gray-400">Chart will be rendered here</p>
                    </div>
                </div>

                <div className="bg-green-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Subscription Distribution</h3>
                    <p className="text-gray-600 text-sm mb-4">Active subscriptions by plan type</p>
                    <div className="h-64 flex items-center justify-center bg-white rounded-lg">
                        <p className="text-gray-400">Chart will be rendered here</p>
                    </div>
                </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-red-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Recent Activity</h3>
                <p className="text-gray-600 text-sm mb-4">Latest user actions across the platform</p>
                <div className="bg-white rounded-lg divide-y">
                    {[
                        { name: "John Smith", action: "Completed 5th Mock Exam", score: "85%", time: "5 min ago" },
                        { name: "Emily Davis", action: "Subscribed to Monthly Plan", time: "5 min ago" },
                        { name: "Michael Brown", action: "Completed Practice Quiz", score: "85%", time: "9 min ago" },
                        { name: "Sarah Wilson", action: "Started CBT-101 Study Guide", score: "85%", time: "9 min ago" },
                        { name: "David Lee", action: "Completed Vascular Exam", score: "85%", time: "9 min ago" },
                    ].map((item, index) => (
                        <div key={index} className="p-4 flex items-center justify-between hover:bg-gray-50">
                            <div>
                                <p className="font-medium text-gray-900">{item.name}</p>
                                <p className="text-sm text-gray-600">{item.action}</p>
                            </div>
                            <div className="text-right">
                                {item.score && <p className="font-semibold text-gray-900">{item.score}</p>}
                                <p className="text-sm text-gray-500">{item.time}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
