import { useState } from 'react'

export function NewBlogForm({ handleNewBlog }) {
  const [showForm, setShowForm] = useState(false)
  const [newBlog, setNewBlog] = useState({
    title: '',
    author: '',
    url: '',
    user: '',
    likes: 0,
  })

  function handleShowForm() {
    setShowForm((prevShowForm) => !prevShowForm)
  }
  function handleFormSubmit(event) {
    handleNewBlog(event, newBlog, setNewBlog)
    setTimeout(() => {
      handleShowForm()
    }, 500)
  }
  return (
    <div>
      {!showForm ? (
        <button id='new-blog-button' onClick={handleShowForm }>New Blog</button>
      ) : (
        <>
          <h2 >Create New</h2>
          <form onSubmit={(event) => handleFormSubmit(event)}>
            <label>
              <p>
                Title:
                  <input
                    id='title'
                  required
                  type="text"
                  value={newBlog.title}
                  name="Title:"
                  onChange={({ target }) =>
                    setNewBlog({ ...newBlog, title: target.value })
                  }
                />
              </p>
            </label>
            <label>
              <p>
                Author:
                  <input
                    id='author'
                  required
                  type="text"
                  value={newBlog.author}
                  name="Author:"
                  onChange={({ target }) =>
                    setNewBlog({ ...newBlog, author: target.value })
                  }
                />
              </p>
            </label>
            <label>
              <p>
                Url:
                  <input
                    id='url'
                  required
                  type="text"
                  value={newBlog.url}
                  name="Url:"
                  onChange={({ target }) =>
                    setNewBlog({ ...newBlog, url: target.value })
                  }
                />
              </p>
            </label>
            <button id="create-button"type="submit">Create</button>
            <button
              onClick={handleShowForm}
                style={{ display: 'block' }}
                id='cancel-button'
              
            >
              Cancel
            </button>
          </form>
        </>
      )}
    </div>
  )
}
