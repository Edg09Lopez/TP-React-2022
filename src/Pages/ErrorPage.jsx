import Footer from '../component/Footer';
import '../css/ErrorPage.css';

function ErrorPage() {
  return (
    <body className='errorPage'>
      <section className='error-message'>
        <section className='error-message__container'>
          <p className='animated bounce error'>404</p>
          <p className='message'>Oops! Al parecer la página que busca no existe.</p>
        </section>
      </section>
      <Footer />
    </body>
  );
}

export default ErrorPage;