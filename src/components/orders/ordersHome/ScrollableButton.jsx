
export const ScrollableButton = ({name, buttonLabels=[]}) => {
  return (
<div  className="overflow-x-auto w-full mt-5 shadow mb-5">
      {name && <div className="text-gray-400 mx-3 text-center">{name}</div>}
    <div  className="flex space-x-3 p-4 min-w-full">
        <div className="p-1 px-4 bg-orange-500 text-white rounded-md shadow flex justify-center items-center whitespace-nowrap min-w-max">
        All
        </div>
        {buttonLabels.map((label, index)=>(
        <div key={index} className="p-1 px-4 text-orange-500 bg-white rounded-md shadow flex justify-center items-center whitespace-nowrap min-w-max">
        {label}
        </div>
        ))}
    </div>
</div>
  )
}


