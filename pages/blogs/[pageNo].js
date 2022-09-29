import { useRouter } from "next/router";
import Navbar from '../../components/Navbar';

const PageNo = () => {
    const router = useRouter();
    const pageNumber = router.query.pageNo;

    return (
        <>

            <Navbar></Navbar>
            
            <h1 className="text-3xl mx-8 my-4 text-blue-800">
                Example Dynamic Routing ::
                <span className="text-orange-400 ml-8 mr-2">
                    Your blog
                </span>

                <span className="text-orange-900 mr-2">
                    -- {pageNumber} --
                </span>

                <span className="text-orange-400 mr-2">
                    Page
                </span>
            </h1>
        </>
    )
};

export default PageNo;