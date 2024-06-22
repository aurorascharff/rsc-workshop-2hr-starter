import ContactForm from './_components/ContactForm';
import type { Contact } from '@prisma/client';

type PageProps = {
  params: {
    contactId: string;
  };
};

export default function EditContactPage({ params }: PageProps) {
  const contactId = decodeURIComponent(params.contactId);
  const contact: Contact = {
    avatar: 'https://sessionize.com/image/b07e-400o400o2-KgNRF3S9sD5ZR4UsG7hG4g.jpg',
    createdAt: new Date(),
    email: '',
    favorite: true,
    first: 'John',
    id: contactId,
    last: 'Doe',
    notes: 'This is a note.',
    twitter: 'johndoe',
    updatedAt: new Date(),
  };

  return <ContactForm contact={contact} />;
}
