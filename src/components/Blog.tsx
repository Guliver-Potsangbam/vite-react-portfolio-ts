// import blogData from '../blog.json';

// type Blog = {
//     id: number,
//     title: string,
//     cover: string,
//     author: string
// }

// export function Blog() {
//     return (
//         <div className="container">
//             <div className="blog">
//                 {blogData.map((blog: Blog) =>
//                     <div className="card" key={blog.id}>
//                         <img src={blog.cover} alt="" />
//                         <div className="details">
//                             <h2>{blog.title}</h2>
//                             <h4>{blog.author}</h4>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </div>
//     )
// }
// import Spline from '@splinetool/react-spline';

// export default function Home() {
//   return (
//     <main style={{ width: '100vw', height: '50vh' }}>
//       <Spline scene="https://prod.spline.design/S2lcN9UGeg1Jnd1T/scene.splinecode" />
//     </main>
//   );
// }
import Spline from "@splinetool/react-spline";
import '../App.css';

export default function Home() {
  return (
    <main className="container">
      {/* Spline 3D Background */}
      <div className="spline-background">
        <Spline scene="https://prod.spline.design/S2lcN9UGeg1Jnd1T/scene.splinecode" />
      </div>

      {/* Foreground Content */}
      <section className="content">
        <h1>Coding Dreams into Reality</h1>
        {/* <p>Develope by BTM coders</p> */}
      </section>
    </main>
  );
}

