const PageTitle = ({ title, ...rest }) => {
  return (
    <div className="mb-4">
      <h1 {...rest}>{title}</h1>
    </div>
  )
}

export default PageTitle
