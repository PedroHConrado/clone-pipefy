import { Container } from "./styles"
import { loadLists } from '../../services/api'

import { List } from '../List'

const lists = loadLists();

export function Board() {
    return (
        <Container>
            {lists.map(list => <List key={list.title} data={list} />)}
        </Container>
    )
}