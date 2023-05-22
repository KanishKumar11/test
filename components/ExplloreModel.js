import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "../styles/Review.module.css";
import tstyles from "../styles/tailwind.module.css"

const CourseMap = ({
  id,
  title,
  description,
  image,
  onStartClick,
  onDiscussClick,
}) => (

  <div className={`modal-dialog ${tstyles.tc}`}> 

        <div className={tstyles.tfgg}></div>
        <div className={tstyles.tffg}></div>
       
         <motion.div
         whileHover={{ scale: 1.1 }}
         
className={tstyles.tyh}       >
       {/* <Image src={props.imgLink} alt="ima" width={100} height={100}/> */}
        <div className={tstyles.thj}>
       <div className={tstyles.tlf}>
      
       </div>
        </div>
         <div className={tstyles.ymj}>
          <div></div>
          Review title
         </div>
          {/* <div className="mb-5 flex flex-row p-1 items-center justify-center"> review</div> */}
            {/* <Link href={`CourseMap/${id}`}> */}
          {/* <i className="fa-solid fa-arrow-right"></i> */}
        {/* </Link> */}
      
      {/* {true && (
        <div className={`${styles.Category_operations} `}>
          <Link href={`CourseMap/${id}`} className="cursor-pointer cat-option">
          <p className="cursor-pointer bg-blue-500 rounded-full text-center p-2">Learn More</p>
          </Link>
        </div> 
      )} */}
       </motion.div>
  

 </div>

);
export default CourseMap;