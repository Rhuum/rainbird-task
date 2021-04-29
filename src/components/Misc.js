const Loading = () => {
  return (
    <div>Loading...</div>
  )
}

const Error = (e) => {
  return (
    <>
      <div>Error: {JSON.stringify(e)}</div>
    </>
  )
}

export { Loading, Error };
