import Footer from 'src/components/Footer'
import RegisterHeader from 'src/components/RegisterHeader'
import Login from 'src/pages/Login'

interface Props {
  children?: React.ReactNode
}

function RegisterLayout({ children }: Props) {
  return (
    <div>
      <RegisterHeader />
      {children}
      <Footer />
    </div>
  )
}

export default RegisterLayout
