
const Box = ({jobBoxData} : {jobBoxData: any}) => {
  return (
		<div className="outsideContainer">

			<span className="outerSpanHomeText">
				<span className="innerSpanHomeText">
					<div className="eachContainer">
						<div className="jobTitle">{jobBoxData.name}</div>
						<div className="jobDescription">
							{jobBoxData.description}
						</div>
					</div>
				</span>
			</span>

		</div>
  )
}

export default Box
