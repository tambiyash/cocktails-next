const Tag = ({ name, className }: { name: string, className: string }) => (
  <div className={`p-1 w-fit h-fit text-xs bg-indigo-500 text-white rounded mr-2 ${className}`}>{name}</div>
)

export default Tag