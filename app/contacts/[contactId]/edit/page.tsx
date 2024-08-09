import { routes } from '@/validations/routeSchema';
import ContactForm from './_components/ContactForm';

type PageProps = {
  params: unknown;
};

export default function EditContactPage({ params }: PageProps) {
  const { contactId } = routes.contactIdEdit.$parseParams(params);

  return <ContactForm contactId={contactId} />;
}
