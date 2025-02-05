
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

