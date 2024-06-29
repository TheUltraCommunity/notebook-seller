export default function Card(props) {
  return (
    <div className={`w-[85%] rounded-2xl border border-clr-1 p-6 flex justify-between items-center shadow-lg ${props.rowReverse && "flex-row-reverse"}`}>
      <div className="w-[50%] space-y-3 ">
          <p className="text-4xl font-bold drop-shadow-2xl text-clr-1">{props.title}</p>
          <p className="text-black/75 font-medium">
            {props.content}
          </p>
      </div>
      <div>
        <img
          src={props.imgLink}
          alt="cpu"
          className="w-[400px] h-[250px] rounded-2xl shadow-xl object-fill"
        />
      </div>
    </div>
  );
}
