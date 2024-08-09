import Image from 'next/image';
import Button from '@/components/ui/Button';
import LinkButton from '@/components/ui/LinkButton';
import { routes } from '@/validations/routeSchema';
import Favorite from './_components/Favorite';
import type { Contact } from '@prisma/client';

type PageProps = {
  params: unknown;
};

export default function ContactPage({ params }: PageProps) {
  const { contactId } = routes.contactId.$parseParams(params);

  const contact: Contact = {
    avatar: '',
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

  return (
    <div className="flex flex-col gap-4 lg:flex-row">
      <div>
        {contact.avatar && (
          <Image
            width={192}
            height={192}
            className="mr-8 rounded-3xl bg-gray object-cover"
            alt={`${contact.first} ${contact.last} avatar`}
            key={contact.avatar}
            src={contact.avatar}
          />
        )}
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="flex-start flex gap-4 text-3xl font-bold">
          {contact.first || contact.last ? (
            <>
              {contact.first} {contact.last}
            </>
          ) : (
            <i>No Name</i>
          )}{' '}
          <Favorite contact={contact} />
        </h1>

        {contact.twitter ? (
          <p className="text-2xl text-primary">
            <a className="text-primary no-underline hover:underline" href={`https://twitter.com/${contact.twitter}`}>
              {contact.twitter}
            </a>
          </p>
        ) : null}

        {contact.notes ? <p>{contact.notes}</p> : null}

        <div className="my-4 flex gap-2">
          <LinkButton theme="secondary" href={routes.contactIdEdit({ contactId })}>
            Edit
          </LinkButton>
          <Button type="submit" theme="destroy">
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}
