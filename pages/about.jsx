import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <>
      <div className='flex flex-col min-h-screen'>
        <div className='flex flex-col relative max-w-lg mx-auto items-center mb-24 px-4'>
          <p className='text-justify mb-4'>
            none of us are ok but it’s gonna be ok. The beanstalk—where the
            beans talk.
          </p>
          <Image
            src='/about_image.jpg'
            width='500'
            height='300'
            alt='cool image'
            className='w-full object-cover mb-4'
          />
          <p className='text-justify mb-4'>
            Warm welcomes to this space I&apos;m carving out for myself to share
            what I&apos;m feeling in this beautiful, terrifying, turbulent, wild
            time. Aka LIFE lolll…. I truly have no idea what is going on or what
            I am doing, but the big secret is that NOBODY DOES!!!!! I&apos;m
            turning 30! I&apos;m confronting my chronic pain! I&apos;m creating
            healthy boundaries! I&apos;m embracing my fears and I&apos;m writing
            about them without shame! I&apos;m committed to cherishing every
            moment of life, even if it tends to be mostly tears, existentialism
            and grief these days. So I figured it might make us all feel a
            little less lonely if I actually shared my thoughts versus hiding
            them all away in my journals on a shelf like little secret tombs
            [which they are so plz do not read them ;]. But forreal, we are all
            one and we are all experiencing the same emotions right now in some
            way or another. Plus we live in a society that is literally all made
            up and the points don&apos;t matter!!! So we might as well talk
            about what&apos;s weighing on our hearts and free ourselves to
            actually be present and in our bodies for the time we are here. So
            yeah, my intention is to share what I&apos;m working through in my
            life journey. I see health as a one-million pointed star and I am
            reaching into each little point and mucking thru the yuck n weeding
            n tending n watering n planting new seeds with real intention and
            purpose. I plan to share where I&apos;m at with managing the chronic
            pain I&apos;ve been experiencing since I was 12. I am learning so
            much in trauma-based therapy and I&apos;ve experienced first-hand
            the empowerment, connection and healing that comes from confidently
            sharing your story. I love meeting new people, capturing images to
            savor tiny moments and celebrating existence with the freaking
            gorginaaa humans I am blessed to share mine with. And, of course,
            and most important, I am looking forward to showering you with all
            the love and encouragement that I am able to give, while also making
            sure my own cup is always full first. It is better for everyone that
            way! After all, it really is a miracle that you&apos;re here at all.
            Appreciate you for indulging in whatever this is or may become. be
            well & be u,,bird oh yeah n when I write, I like to use the
            nickname/penname my nonno joe bestowed upon me, for it helps keep me
            grounded and provides a healthy distance from my private life.
            xoxoxoxoxoxoxoxoxoxxo!!!!!!!!!! PS. Many gratitudes and hugs to my
            friend Alex for lovingly crafting this website and taking this
            project from an idea in a word doc to a real thing. You are pure
            kindness!
          </p>
        </div>
      </div>
    </>
  );
}
