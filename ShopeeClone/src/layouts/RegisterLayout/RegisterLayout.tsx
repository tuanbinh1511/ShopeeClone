interface Props {
  children?: React.ReactNode
}

function RegisterLayout({ children }: Props) {
  return (
    <div>
      Register Layout
      {children}
    </div>
  )
}

export default RegisterLayout
