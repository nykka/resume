import page1 from "../../images/comics/abs/tablet-1.webp";
import page2 from "../../images/comics/abs/tablet-2.webp";
import page3 from "../../images/comics/abs/tablet-3.webp";

export default function Index() {
  return (
    <div className="grid items-center py-20 px-5">
      <div aria-label="page 1">
        <img src={page1} alt="A syntethic cartoonish illustration of a latina girl doing abs ocurrs in three panels. She's sweating and her face is red. In the second panel, when she is at the top, she says 'one' like she is counting the number of abs she achieved so far. On the top you can read: If all the effort I did in the past..." />
      </div>
      <div aria-label="page 2">
        <img src={page2} alt="Two panels. In both we see the girl from the side. In the first one she stays in the floor, holding her breath. In the second one, she realease the breath, recovers the color of her face and stays looking at the ceiling. On the top you can read: ...I would have use it on what I liked me the most..." />
      </div>
      <div aria-label="page 3">
        <img src={page3} alt="One panel. We can see the girl from the top. She keeps looking at the ceiling with an expression of disappointment. On the top you can read: ...today I'd be capable of anything" />
      </div>
    </div>
  );
}
