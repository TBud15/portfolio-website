export default function ProjectsDetails() {
  return (
    <div className=" mt-8">
      {/* top card */}
      <div className="mx-auto bg-[#161B22] text-white p-15 rounded-xl shadow-md z-10 border border-[#30363D] text-xl ml-60 mr-130">
        <h2 className="text-[#FFB77C] text-xl font-bold mb-4">Tire Rec Ua</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          imperdiet ante tortor, sit amet mollis erat placerat suscipit. Nulla
          lobortis et libero sit amet congue. Donec quis odio at augue imperdiet
          posuere. PLorem ipsum dolor sit amet, consectetur adipiscing elit.
          Praesent imperdiet ante tortor, sit amet mollis erat placerat
          suscipit. Nulla lobortis et libero sit amet congue. Donec quis odio at
          augue imperdiet posuere. Sed ullamcorper hendrerit auctor. In laoreet
          arcu maximus fringilla ornare. Sed quam leo, maximus a sodales
          scelerisque, lacinia vitae tortor.
        </p>
      </div>

      {/* website Image #2 */}
      <div className="absolute top-70 left-40 z-20">
        <div className="bg-[#161B22] text-white p-15 rounded-xl border border-[#6E7681] w-[681px] shadow-[0_4px_20px_rgba(255,182,120,0.3),0_6px_30px_rgba(255,162,120,0.2)]">
          <h2 className="text-[#FFA28B] text-xl font-bold mb-4">
            Lorem ipsum dolor sit amet
          </h2>

          <img
            src="/web-ph.webp"
            alt="Project screenshot"
            width={581}
            height={327}
            className="rounded-md"
          />

          <p className="mt-4 text-[#FFB77C] text-xl">Deploy Link</p>
        </div>
      </div>

      {/* bottom right from #1 */}
      <div className="bg-[#161B22] text-white p-15 rounded-xl shadow-md z-10 border border-[#30363D] text-xl w-100 ml-230 mt-10">
        <h2 className="text-[#FFB77C] text-xl font-bold mb-4">Tire Rec Ua</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          imperdiet ante tortor, sit amet mollis erat placerat suscipit. Nulla
          lobortis et libero sit amet congue. Donec quis odio at augue imperdiet
          posuere. Sed ullamcorper hendrerit auctor. In laoreet arcu maximus
          fringilla ornare. Sed quam leo, maximus a sodales scelerisque, lacinia
          vitae tortor
        </p>
      </div>

      {/* info card #2 */}
      <div className="absolute top-208 left-60">
        <div className="bg-[#161B22] text-white p-15 rounded-xl border border-[#6E7681] w-[600px]">
          <h2 className="text-[#FFB77C] text-xl font-bold mb-4">
            Lorem ipsum dolor sit amet
          </h2>
          <p className="text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            imperdiet ante tortor, sit amet mollis erat placerat suscipit. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            imperdiet ante tortor, sit amet mollis erat placerat suscipit. Nulla
            lobortis et libero sit amet congue. Donec quis odio at augue
            imperdiet posuere. Sed ullamcorper hendrerit auctor. In laoreet arcu
            maximus fringilla ornare. Sed quam leo, maximus a sodales
            scelerisque, lacinia vitae tortor.
          </p>
        </div>
      </div>

      {/* git productivity icons line */}
      <div className="absolute top-190 left-27 z-1">
        <div className="w-[4px] h-[700px] bg-gradient-to-b from-[#EC6547] to-transparent" />
      </div>

      {/* git productivity line curve */}
      <div className="absolute top-210 left-27">
        <img
          src="/git-branch-productivity.svg"
          alt="Project screenshot"
          className="rounded-md"
        />
      </div>

      {/* website Image #2 */}
      <div className="absolute top-230 left-230 z-11">
        <div className="bg-[#161B22] text-white p-15 rounded-xl border border-[#6E7681] w-[681px] shadow-[0_4px_20px_rgba(255,182,120,0.3),0_6px_30px_rgba(255,162,120,0.2)]">
          <h2 className="text-[#FFA28B] text-xl font-bold mb-4">
            Lorem ipsum dolor sit amet
          </h2>

          <img
            src="/web-ph.webp"
            alt="Project screenshot"
            width={581}
            height={327}
            className="rounded-md"
          />

          <p className="mt-4 text-[#FFB77C] text-xl">Deploy Link</p>
        </div>
      </div>

      {/* top card #2*/}
      <div className="absolute x-auto bg-[#161B22] text-white p-15 rounded-xl shadow-md z-10 border border-[#30363D] text-xl ml-60 mr-130 top-350">
        <h2 className="text-[#FFB77C] text-xl font-bold mb-4">
          Lorem ipsum dolor sit amet
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          imperdiet ante tortor, sit amet mollis erat placerat suscipit. Nulla
          lobortis et libero sit amet congue. Donec quis odio at augue imperdiet
          posuere. Sed ullamcorper hendrerit auctor. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Praesent imperdiet ante tortor, sit amet
          mollis erat placerat suscipit. Nulla lobortis et libero sit amet
          congue. Donec quis odio at augue imperdiet posuere. Sed ullamcorper
          hendrerit auctor. In laoreet arcu maximus fringilla ornare. Sed quam
          leo, maximus a sodales scelerisque, lacinia vitae tortor.
        </p>
      </div>
    </div>
  );
}
