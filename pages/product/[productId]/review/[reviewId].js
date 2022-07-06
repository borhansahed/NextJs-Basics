import {useRouter} from 'next/router'

function reviewDetails () {

   const router = useRouter()
  
   const {productId , reviewId} = router.query;

    return (
        <>
        <h1>{reviewId} review for {productId} product </h1>
        </>
    )
}


export default reviewDetails;