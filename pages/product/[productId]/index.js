import { useRouter } from 'next/router'

const  productDetails =  () => {
    const router = useRouter();
    
const productId = router.query.productId;

    return(
        <>
        <h1>MY Product number IS : {productId}</h1>
        </>
    )
}

export default productDetails;