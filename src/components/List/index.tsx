import { Container } from "./styles"

import { Card } from "../Card"

import { MdAdd } from 'react-icons/md'

export function List({ data }) {
    return (
       <Container>
           <header>
               <h2>{data.title}</h2>
               {data.creatable && (
                <button type="button">
                   <MdAdd size={24} color="#FFF" />
               </button>
               )}
           </header>
           <ul>
               <Card />
               <Card />
               <Card />
               <Card />
               <Card />
           </ul>
       </Container>
    )
}