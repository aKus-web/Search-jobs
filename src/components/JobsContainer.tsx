interface JobsContainerProps {
  children: JSX.Element | JSX.Element[];
}

export const JobsContainer = ({children}: JobsContainerProps) => {
  return (
    <main className="bg-bg min-h-[calc(100vh-220px)] py-24 px-10">
      {children}
    </main>
  )
}
