import image from "../images/kirby.webp";

export default function Index() {
  return (
    <div className="text-center flex flex-col items-center">
      <h1>I'm Nykka</h1>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <img 
          src={image} 
          alt="Kirby sitting on a folding bench with a fishing rod fishing in a river. It is wearing a bucket hat and it is smiling." 
        />
      </div>
    </div>
  );
}
