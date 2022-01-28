import { Container } from "./styles"

import { List } from '../List'

export function Board() {
    return (
        <Container>
            <List />
            <List />
            <List />
            <List />
        </Container>
    )
}