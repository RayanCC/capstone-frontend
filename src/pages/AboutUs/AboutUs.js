import "./aboutUs.scss";
import Leah from '../../assets/img/HomePage.jpg';
import Wade from '../../assets/img/gallery.jpg';


const AboutUs = () => {
  return (
    <div>
      <main className="aboutContainer">
        <div className="aboutFounder">
          <h3>Founder&Designer:  Wade</h3>
          <div className="personalCotainer">
           <img className="avatar" src={Wade} alt="wadeAvatar" />
          <span>
            Hello everyone! I'm Wade, the creative designer of the Blues Family!
            Blues and his friends are the adorable round little octopuses that
            my partner and I have poured a lot of effort into creating. At the
            beginning of our journey, as inexperienced creators, we embarked on
            this adventure fueled by our love for all things cute and our
            passion for bringing our character creations to life. Thus, we have
            the sunny and warm Blues, the lovely Pink, the knowledgeable and
            wise Brown Teacher, and our most beloved goofball, Green (laughs).
            From being novices to becoming proficient, from having nothing to
            now having emojis, comics, merchandise, the journey of Blues and his
            friends to conquer the world has just begun! We're grateful for
            everyone's love for Blues and his friends, and we hope you'll
            continue to follow their adventures! In a world full of ups and
            downs, Blues mends and patches, bringing smiles and cuteness to the
            world is our Blues Family's top priority!
          </span>
          </div>
        </div>

        <div className="aboutPainter">
          <h3>Painter:  Leah</h3>
          <div className="personalCotainer">
          <img  className="avatar" src={Leah} alt="LeahAvatar"/>
          <span>
            Hello everyone, I'm Leah, the artist behind Blues Family's
            character ^_^! Transitioning from being an interior
            designer to a freelance illustrator in my first year, I was
            fortunate enough to become the artist for BF through a serendipitous
            opportunity. Initially, BF was just a small octopus plush that
            accompanied the author in their daily life, and I saw the love the
            author had for it over the years and their enthusiasm for this
            project. This was the main reason I joined this family; I wanted to
            use my limited abilities to help the author create this warm and
            wonderful little world. From a vague "Intellectual Property" at the start, BF
            gradually created a variety of characters through the efforts of the
            author and me. They gained stories, they gained souls. Over the year
            and a half, we've worked together on serialized comics, emojis, and
            I've also witnessed the birth of plush merchandise, the
            establishment of the company, and the successful holding of offline
            events. It's been incredibly fulfilling and something to be proud of
            to accompany the author through this journey from nothing to
            something. We'll continue to work hard in the future to showcase the
            best of BF to everyone. I hope Blues Family's will have
            a better future, continuing to heal our beloved readers and also
            healing the author and me in this imperfect world.
          </span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutUs;
