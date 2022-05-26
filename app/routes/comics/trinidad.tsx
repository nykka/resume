import page1 from "../../images/comics/trinidad/page1/tablet-1.webp";
import page2panel1 from "../../images/comics/trinidad/page2/panel-1.webp";
import page2panel2 from "../../images/comics/trinidad/page2/panel-2.webp";
import page2panel3 from "../../images/comics/trinidad/page2/panel-3.webp";
import page2panel4 from "../../images/comics/trinidad/page2/panel-4.webp";
import page2panel5 from "../../images/comics/trinidad/page2/panel-5.webp";

export default function Index() {
	return (
		<div className="grid items-center py-20 px-5 ">
			<div aria-label="page 1" className="mb-5 bg-white">
				<img src={page1} alt="" />
			</div>
			<div aria-label="page 2" className="grid grid-rows-3 grid-cols-2 gap-0 p-5 bg-white">
				<div aria-label="panel 1">
					<img src={page2panel1} alt="" />
				</div>
				<div aria-label="panel 2">
					<img src={page2panel2} alt="" />
				</div>
				<div aria-label="panel 3">
					<img src={page2panel3} alt="" />
				</div>
				<div aria-label="panel 4">
					<img src={page2panel4} alt="" />
				</div>
				<div aria-label="panel 5" className="col-end-3 col-start-1">
					<img src={page2panel5} alt="" />
				</div>
			</div>
		</div>
	);
}
