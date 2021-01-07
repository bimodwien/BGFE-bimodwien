import { gql } from '@apollo/client'

export const getMerchant = gql`
query allMerchant {
  Merchants(first: 30, page:1, onlyAlphabet:true){
    data{
      name
    }
  }
}
`

export const getCategory = gql`
query categoris{
  Categories(page:1){
    data{
      id
      name
    }
  }
}
`