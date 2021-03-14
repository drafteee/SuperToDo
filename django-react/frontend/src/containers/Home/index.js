import React, {
  memo
} from 'react'
import Dictionary from '../../components/Dictionary'

const Home = memo(() => {
  return (
    <div>

      <Dictionary />
    </div>
  )
})


export default Home