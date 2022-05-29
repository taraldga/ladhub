import React from "react";
import { Link } from '@chakra-ui/react'

const Home = () => {
  return(
    <div>
      Home
      <Link href="/login">Log in</Link>
      <Link href="/fjell">Fjell</Link>
    </div>
  )
}

export default Home;