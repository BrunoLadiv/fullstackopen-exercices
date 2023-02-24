import { LoginForm } from './components/LoginForm'
import loginService from './services/login'
import { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [username, setUserName] = useState('')
  const [password, setUserPassword] = useState('')
  const [user, setUser] = useState(null)
  const [errorMessage, setErrorMessage] = useState('')
  async function handleLogin(event) {
    event.preventDefault()
    console.log('logging in with', username, password)
    try {
      const user = await loginService.login({
        username: username,
        password: password,
      })
      console.log('user token', user)
      setUser(user)
      setUserName('')
      setUserPassword('')
    } catch (exception) {
      setErrorMessage('Wrong credentials')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  useEffect(() => {
    blogService.getAll().then((blogs) => setBlogs(blogs))
  }, [])

  return (
    <div>
      {!user && (
        <LoginForm
          handleLogin={handleLogin}
          userName={username}
          setUserName={setUserName}
          userPassword={password}
          setUserPassword={setUserPassword}
        />
      )}
      {user ? <h2>{user.username} Blogs</h2> : <h2>Login to see your Blogs</h2>}
      {user &&
        blogs.map((blog) => (
          <Blog
            key={blog.id}
            blog={blog}
          />
        ))}
    </div>
  )
}

export default App
