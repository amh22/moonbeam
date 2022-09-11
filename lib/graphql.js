export const GetLatestBlocks = /* GraphQL */ `
  query GetLatestBlocks {
    blocks(limit: 15, orderBy: height_DESC) {
      hash
      height
      id
      timestamp
    }
  }
`

export const GetBlock = /* GraphQL */ `
  query GetBlock($id: ID!) {
    blockById(id: $id) {
      events {
        id
      }
      extrinsics {
        id
      }
    }
  }
`
