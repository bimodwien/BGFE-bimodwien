import { gql } from '@apollo/client'

export const getMerchant = gql`
query allMerchant {
  Merchants(first: 30, page:1){
    paginatorInfo{
      count
      currentPage
      firstItem
    }
    data{
      id
      name
      group_id
      logo_img
    }
  }
}
`

export const getCategory = gql`
query merchantpercategory{
  Merchants(first:30, page:1, hasCategories:{
    column: CATEGORY_ID, value:2
  }){
     paginatorInfo{
      count
      currentPage
      firstItem
    }
    data{
      id
      name
      group_id
      logo_img
      categories{
        name
        id
      }
    }
  }
}
`