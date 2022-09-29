import Link from "next/link"
import Navbar from "../components/Navbar";

const index = () => {
  return (
    <>
      <Navbar></Navbar>

      <div className="mx-8">
                <h1 className="text-3xl">
                    This is Home Page...
                </h1>
            </div>
    </>
  );
};
export default index;
