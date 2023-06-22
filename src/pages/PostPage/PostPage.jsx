// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";

// import { getPost } from "../../store/postSlice";

// import s from "./PostPage.module.scss";
// function PostPage() {
//   const { id } = useParams();
//   const dispatch = useDispatch();
//   const { post } = useSelector((state) => state.post);
//   console.log(post);

//   useEffect(() => {
//     dispatch(getPost(id));
//   }, []);

//   return (
//     <div className={s.postPage}>
//       {/* <div className={s.firstTitle}>PostPage</div> */}
//       <div className={s.title}>{post[0]?.title}</div>
//       <div className={s.description}>
//         {post[0]?.image && (
//           <img className={s.imageEachPost} src={post[0]?.image} alt="" />
//         )}
//         <div className={s.textBlock}>
//           <div className={s.texts}>{post[0]?.text}</div>
//         </div>
//       </div>
//       <br />
//     </div>
//   );
// }

// export default PostPage;
