import React from 'react'

const AddJob = () => {

  const [title, setTitle]=useState('')
   const [location, setLocation]=useState('Bangalore')
    const [category, setCategory]=useState('Programming')
     const [Level, setLevel]=useState('Beginner level')
      const [salary, setSalary]=useState(0)

      const editorRef = useRef(null)
      const quillRef = useRef(null)
  return (
    <form>
      
      <div>
      <p>Job Title</p>
      <input type='text' onChange={e => setTitle(e.target.value)}
      required 
      />
      

    </div>

    </form>
    
  )
}

export default AddJob