import { useState } from 'react'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col">
      {/* 导航栏 */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-blue-500">Logo</div>

            {/* 移动端菜单按钮 */}
            <button
              className="lg:hidden p-2 rounded-md hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* 桌面端导航 */}
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#" className="text-gray-600 hover:text-blue-500">首页</a>
              <a href="#" className="text-gray-600 hover:text-blue-500">产品</a>
              <a href="#" className="text-gray-600 hover:text-blue-500">关于我们</a>
              <a href="#" className="text-gray-600 hover:text-blue-500">联系我们</a>
            </div>
          </div>

          {/* 移动端导航菜单 */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 space-y-4">
              <a href="#" className="block text-gray-600 hover:text-blue-500">首页</a>
              <a href="#" className="block text-gray-600 hover:text-blue-500">产品</a>
              <a href="#" className="block text-gray-600 hover:text-blue-500">关于我们</a>
              <a href="#" className="block text-gray-600 hover:text-blue-500">联系我们</a>
            </div>
          )}
        </div>
      </nav>

      {/* 主要内容区域 */}
      <main className="flex-1 w-full">
        <div className="w-full h-full overflow-x-auto">
          <table className="w-full border-collapse min-w-full">
            <thead>
              <tr className="border-b bg-gray-50">
                <th className="p-4 text-left">
                  <p className='text-xl font-semibold'>#</p>
                </th>
                <th className="p-4 text-left">
                  <p className='text-xl font-semibold'>標題</p>
                </th>
                <th className="p-4 text-left">
                  <p className='text-xl font-semibold'>價位</p>
                </th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <tr key={item} className="border-b hover:bg-gray-50">
                  <td className="p-4">
                    <p className='text-xl'>{item}</p>
                  </td>
                  <td className="p-4">
                    <p className='text-xl'>標題</p>
                  </td>
                  <td className="p-4">
                    <p className='text-xl'>價位</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      {/* 页脚 */}
      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="container py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">关于我们</h4>
              <p className="text-gray-600">
                我们致力于为用户提供最好的服务和体验。
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">快速链接</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-blue-500">首页</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-500">产品</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-500">服务</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">联系我们</h4>
              <ul className="space-y-2">
                <li className="text-gray-600">邮箱：contact@example.com</li>
                <li className="text-gray-600">电话：123-456-7890</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
