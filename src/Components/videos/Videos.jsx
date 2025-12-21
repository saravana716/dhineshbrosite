import React, { useEffect, useRef } from 'react';
import f1 from "../../assets/fashion.mp4";
import bgImage from "../../assets/vi.webp";
const Videos = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollHeight = container.scrollHeight;
      const clientHeight = container.clientHeight;
      const maxScroll = scrollHeight - clientHeight;
      
      let scrollPosition = 0;
      const scrollSpeed = 0.5;

      const scroll = () => {
        scrollPosition += scrollSpeed;
        if (scrollPosition > maxScroll) {
          scrollPosition = 0;
        }
        container.scrollTop = scrollPosition;
      };

      const intervalId = setInterval(scroll, 30);
      return () => clearInterval(intervalId);
    }
  }, []);

  const tamilQuotes = [
    {
      title: "பட்டுப்புடவை - காலத்தால் அழியாத அழகு",
      description: "கைத்தறி நெசவாளர்களின் திறமையும், பாரம்பரிய நெசவு முறையும் சேர்ந்து உருவாக்கும் ஒவ்வொரு புடவையும் ஒரு கலைப்படைப்பு."
    },
    {
      title: "காஞ்சிபுரம் பட்டு - தென்னிந்தியாவின் பெருமை",
      description: "700 ஆண்டுகளுக்கும் மேலான வரலாற்றைக் கொண்ட காஞ்சிபுரம் பட்டு புடவைகள், தங்கம் மற்றும் வெள்ளி நூல்களால் நெய்யப்படுகின்றன."
    },
    {
      title: "கைத்தறி நெசவு - ஒவ்வொரு நூலும் ஒரு கதை",
      description: "பாரம்பரிய நெசவு தொழில்நுட்பத்தில் ஒவ்வொரு புடவையும் 3 முதல் 10 நாட்கள் வரை நெய்யப்படுகிறது."
    },
    {
      title: "மைசூர் சில்க் - நுட்பமான நெசவுக்கலை",
      description: "மைசூர் பட்டு புடவைகள் அவற்றின் மென்மையான அமைப்பு மற்றும் பிரகாசமான நிறங்களுக்கு பிரபலமானவை."
    },
    {
      title: "பனாரஸ் சேலை - மரபின் சிகரம்",
      description: "மொகலாய கால நெசவு பாரம்பரியத்துடன், தங்க மற்றும் வெள்ளி நூல்களால் செய்யப்படும் ஜரிகை வேலைப்பாடுகள்."
    },
    {
      title: "கோட்டா டோரியா - வெளிப்படையான நேர்த்தி",
      description: "ராஜஸ்தானின் பாரம்பரிய நெசவு நுட்பத்தில், காற்றோட்டமான மற்றும் லேசான துணியில் செய்யப்படும் சதுர வடிவ வேலைப்பாடுகள்."
    },
    {
      title: "சந்தேரி சேலை - மென்மையின் உச்சம்",
      description: "மத்திய பிரதேசத்தின் பாரம்பரியம், பட்டு மற்றும் பருத்தி கலவையில் மெல்லிய மற்றும் வெளிப்படையான அமைப்பு."
    },
    {
      title: "மஹேஷ்வரி பட்டு - நைபுண்யத்தின் அடையாளம்",
      description: "நர்மதை நதிக்கரையில் உருவாகும் இந்த பட்டு, தனித்துவமான எல்லை வடிவமைப்புகளுக்கு பிரபலமானது."
    },
    {
      title: "பைதானி சேலை - மஹாராஷ்டிராவின் நினைவுச்சின்னம்",
      description: "பாரசீக மற்றும் இந்திய வடிவமைப்பு கூறுகள் இணைந்த, தங்க மற்றும் வெள்ளி நூல்களால் நெய்யப்படும் பட்டு புடவை."
    },
    {
      title: "பலுச்சரி சேலை - கதை சொல்லும் நெசவு",
      description: "மேற்கு வங்காளத்தின் பாரம்பரிய பட்டு, ஒவ்வொரு புடவையிலும் புராண கதைகள் மற்றும் வரலாற்று காட்சிகள்."
    },
    {
      title: "டசார் பட்டு - இயற்கையின் அன்பளிப்பு",
      description: "காட்டு பட்டுப்புழுக்களின் நூல்களால் செய்யப்படும், கரடுமுரடான அமைப்பும் இயற்கை நிறமும் கொண்ட பட்டு."
    },
    {
      title: "மூகா பட்டு - அசாமின் பொக்கிஷம்",
      description: "உலகின் மிகவும் நீடித்த இயற்கை நார்களில் ஒன்று, மூகா பட்டு அதன் தங்க நிறத்திற்கு பிரபலமானது."
    },
    {
      title: "எரி பட்டு - அமைதியின் பட்டு",
      description: "அகிம்சை முறையில் உற்பத்தி செய்யப்படும் இந்த பட்டு, வெதுவெதுப்பான மற்றும் மென்மையான அமைப்பைக் கொண்டது."
    },
    {
      title: "இகத் நெசவு - துல்லியத்தின் கலை",
      description: "நூல்களை முதலில் சாயமேற்றி பின்னர் நெய்யும் இந்த நுட்பம், மங்கலான வடிவமைப்புகளை உருவாக்குகிறது."
    },
    {
      title: "பட்டோலா சேலை - இரட்டை இகத் சிறப்பு",
      description: "குஜராத்தின் பாரம்பரியம், வார்ப் மற்றும் வெஃப்ட் இரண்டையும் சாயமேற்றி நெய்யும் சிக்கலான செயல்முறை."
    },
    {
      title: "சம்பல்பூர் சேலை - ஒடிசாவின் நெசவு பாரம்பரியம்",
      description: "பாரம்பரிய இகத் நெசவு நுட்பத்தில், கணக்கிடப்பட்ட நூல் கட்டுதல் மூலம் வடிவமைப்புகள் உருவாக்கப்படுகின்றன."
    },
    {
      title: "காலமகாரி சேலை - கைவண்ண கலைநுட்பம்",
      description: "ஆந்திர பிரதேசத்தின் பாரம்பரிய கைவண்ண நுட்பம், இயற்கை சாயங்கள் மற்றும் பென் வேலைப்பாடுகள்."
    },
    {
      title: "பொச்சம்பள்ளி சேலை - இகத்தின் வண்ணத்திருவிழா",
      description: "தெலுங்கானாவின் நெசவு நுட்பம், வார்ப் மற்றும் வெஃப்ட் இகத் இணைந்த சிக்கலான வடிவமைப்புகள்."
    },
    {
      title: "வெங்கட்கிரி சேலை - பருத்தியின் மென்மை",
      description: "ஆந்திர பிரதேசத்தின் பாரம்பரிய பருத்தி சேலை, தங்க நூல் வேலைப்பாடுகள் மற்றும் ஜரிகை எல்லைகள்."
    },
    {
      title: "நாராயணபேட் சேலை - தெலுங்கானாவின் பெருமை",
      description: "கணக்கிடப்பட்ட நூல் நெசவு நுட்பம், வடிவமைப்புகள் முதலில் கணக்கிடப்பட்டு பின்னர் நெய்யப்படுகின்றன."
    },
    {
      title: "மண்டலம் சேலை - ஆந்திராவின் நெசவு மரபு",
      description: "பட்டு மற்றும் பருத்தி கலவையில், பாரம்பரிய வடிவமைப்புகள் மற்றும் துடிப்பான நிறங்கள்."
    },
    {
      title: "குப்படம் சேலை - ஆந்திராவின் நெசவு சிறப்பு",
      description: "சிக்கலான பூ வேலைப்பாடுகள் மற்றும் மாறுபட்ட நிறங்களில், பட்டு பருத்தி கலவை நெசவு."
    },
    {
      title: "அரணி பட்டு - தமிழ்நாட்டின் நெசவு பாரம்பரியம்",
      description: "காஞ்சிபுரத்திற்கு அடுத்தபடியாக, பிரகாசமான நிறங்கள் மற்றும் கோயில் வடிவமைப்புகளுக்கு பிரபலம்."
    },
    {
      title: "கோரட் பட்டு - அசாமின் நெசவுக்கலை",
      description: "மொகலாய தாக்கம் கொண்ட வடிவமைப்புகள், பாரசீக மோட்டிஃப்கள் மற்றும் மலர் வேலைப்பாடுகள்."
    },
    {
      title: "பாவனி சேலை - தமிழ்நாட்டின் பருத்தி சிறப்பு",
      description: "பாரம்பரிய பருத்தி சேலை, எளிமையான வடிவமைப்புகள் மற்றும் நீடித்த தன்மை."
    },
    {
      title: "சலம் சேலை - மத்தியபிரதேசத்தின் மரபு",
      description: "பாரம்பரிய நெசவு நுட்பம், வெளிர் நிறங்கள் மற்றும் நுட்பமான வேலைப்பாடுகள்."
    },
    {
      title: "மஹிஷாசுரா பட்டு - கர்நாடகாவின் நெசவு",
      description: "மைசூர் பட்டின் மாறுபாடு, சிக்கலான ஜரிகை வேலைப்பாடுகள் மற்றும் துடிப்பான நிறங்கள்."
    },
    {
      title: "கடியால் சேலை - குஜராத்தின் பிரகாசம்",
      description: "பாந்தானி நெசவு நுட்பம், கணக்கிடப்பட்ட நூல் சாயமேற்றல் மற்றும் பாலைவன மோட்டிஃப்கள்."
    },
    {
      title: "பீர்பூம் பட்டு - மேற்கு வங்காளத்தின் மரபு",
      description: "பாரம்பரிய இகத் மற்றும் டையிங் நுட்பங்கள், பாலாகட் மற்றும் சான்திநிகேதன் பாணிகள்."
    },
    {
      title: "தன்ஜாவூர் சேலை - தமிழ்நாட்டின் பட்டு",
      description: "கோயில் வடிவமைப்புகள் மற்றும் பாரம்பரிய மோட்டிஃப்கள், தங்க நூல் வேலைப்பாடுகள்."
    },
    {
      title: "சாலீம் ஷாகி சேலை - உத்தர பிரதேசத்தின் நெசவு",
      description: "முஸ்லீம் நெசவாளர்களின் பாரம்பரியம், சிக்கலான மோகல் வடிவமைப்புகள்."
    },
    {
      title: "சிதம்பரம் பட்டு - தமிழ்நாட்டின் சிறப்பு",
      description: "கோயில் நகரத்தின் பட்டு, மத வடிவமைப்புகள் மற்றும் பாரம்பரிய நிறங்கள்."
    },
    {
      title: "கொரா மஸ்லின் - மேற்கு வங்காளத்தின் நெசவு",
      description: "மெல்லிய மஸ்லின் துணி, ஜாம்டானி நெசவு நுட்பம் மற்றும் வெளிர் வடிவமைப்புகள்."
    },
    {
      title: "பாகல்பூர் பட்டு - பீகாரின் நெசவு மரபு",
      description: "மூன்று பட்டு நெசவு நுட்பங்கள் - டசார், மஹதாபடி மற்றும் கடியால்."
    },
    {
      title: "பட்டமடாய் சேலை - அசாமின் நெசவுக்கலை",
      description: "மோகலாய மற்றும் அசாமிய வடிவமைப்புகள் இணைந்த, துடிப்பான நிறங்கள்."
    },
    {
      title: "தாராபூர் சேலை - ஒடிசாவின் பட்டு",
      description: "பாரம்பரிய இகத் நெசவு, இயற்கை சாயங்கள் மற்றும் பழங்கால வடிவமைப்புகள்."
    },
    {
      title: "கொல்லம் பட்டு - கேரளாவின் நெசவு",
      description: "தெற்கு இந்தியாவின் பாரம்பரிய பட்டு, எளிமையான வடிவமைப்புகள் மற்றும் இயற்கை நிறங்கள்."
    },
    {
      title: "பெனாரஸ் ஜரி - உத்தர பிரதேசத்தின் பிரகாசம்",
      description: "சிக்கலான தங்க மற்றும் வெள்ளி நூல் வேலைப்பாடுகள், முஸ்லீம் கைவினைஞர்களின் திறமை."
    },
    {
      title: "மைசூர் கிரேப் - கர்நாடகாவின் மென்மை",
      description: "கிரேப் பட்டு அமைப்பு, மென்மையான வீழ்ச்சி மற்றும் வெளிர் நிறங்கள்."
    },
    {
      title: "ஜார்ககாண்ட் டசார் - பழங்குடியின நெசவு",
      description: "காட்டு பட்டு, பழங்குடியின வடிவமைப்புகள் மற்றும் இயற்கை சாயங்கள்."
    },
    {
      title: "பூர்னி சேலை - குஜராத்தின் எம்பிராய்டரி",
      description: "பாரம்பரிய எம்பிராய்டரி நுட்பம், கண்ணாடி வேலைப்பாடுகள் மற்றும் துடிப்பான நிறங்கள்."
    },
    {
      title: "புலிகட் சேலை - ஒடிசாவின் இயற்கை சாயம்",
      description: "இயற்கை சாயங்கள், கைத்தறி நெசவு மற்றும் பாரம்பரிய ஒடிசி வடிவமைப்புகள்."
    },
    {
      title: "மும்பை பட்டு - மகாராஷ்டிராவின் நவீனம்",
      description: "நவீன வடிவமைப்புகள் மற்றும் பாரம்பரிய நெசவு நுட்பங்கள் இணைந்த பட்டு."
    },
    {
      title: "திருப்பூர் பருத்தி - தமிழ்நாட்டின் சிறப்பு",
      description: "பருத்தி நெசவு தொழிலின் மையம், தரமான பருத்தி சேலைகள் மற்றும் துடிப்பான நிறங்கள்."
    },
    {
      title: "கஷ்மீர் பாஷ்மினா - இமய நெசவு",
      description: "பாஷ்மினா ஆடுகளின் மெல்லிய முடி, கைத்தறி நெசவு மற்றும் சிக்கலான எம்பிராய்டரி."
    },
    {
      title: "காரைக்குடி கல்சட்டை - தமிழ்நாட்டின் பருத்தி",
      description: "பாரம்பரிய கல்சட்டை பாணி, பருத்தி நெசவு மற்றும் எளிய வடிவமைப்புகள்."
    },
    {
      title: "மதுரை சுங்குடி - தமிழ்நாட்டின் பாரம்பரியம்",
      description: "இரட்டை இகத் நுட்பம், இயற்கை சாயங்கள் மற்றும் பாரம்பரிய வடிவமைப்புகள்."
    },
    {
      title: "நாகர்கோயில் பட்டு - தமிழ்நாட்டின் தென்முனை",
      description: "கேரள எல்லையோர பாரம்பரியம், கோயில் வடிவமைப்புகள் மற்றும் தங்க நூல் வேலைப்பாடுகள்."
    },
    {
      title: "திண்டுக்கல் சேலை - தமிழ்நாட்டின் நெசவு",
      description: "பருத்தி மற்றும் பட்டு கலவை, பாரம்பரிய வடிவமைப்புகள் மற்றும் நவீன நிறங்கள்."
    },
    {
      title: "நெசவின் தத்துவம் - ஒவ்வொரு நூலும் முக்கியம்",
      description: "ஒரு புடவையை நெய்வது என்பது வெறும் துணி உருவாக்குதல் அல்ல, அது பாரம்பரியத்தை நெசவதாகும்."
    }
  ];

  const styles = {
    container: {
      width: '100vw',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
     backgroundImage: `url(${bgImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
      position: 'relative'
    },
    backgroundLines: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      opacity: 0.15,
      zIndex: 1
    },
    contentWrapper: {
      width: '100%',
      height: '100%',
      background: 'rgba(255, 255, 255, 0.05)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '60px 100px',
      position: 'relative',
      zIndex: 2,
      backdropFilter: 'blur(3px)'
    },
    videoSection: {
      width: '50%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      gap: '30px'
    },
    videoWrapper: {
      width: '48%',
      height: '90%',
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
      position: 'relative',
      border: '3px solid rgba(255, 215, 0, 0.3)'
    },
    video: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    },
    quotesSection: {
      width: '45%',
      height: '90%',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative'
    },
    scrollContainer: {
      flex: 1,
      overflowY: 'hidden',
      overflowX: 'hidden',
      padding: '30px',
      background: 'linear-gradient(135deg, rgba(139, 69, 69, 0.3) 0%, rgba(165, 85, 85, 0.3) 100%)',
      borderRadius: '20px',
    //   border: '2px solid #D4C5A9 ',
      boxShadow: '0 15px 50px rgba(0,0,0,0.3)',
      position: 'relative'
    },
    quoteCard: {
background: 'rgba(232, 220, 196, 0.7)',
      borderRadius: '15px',
      padding: '25px',
      marginBottom: '20px',
      border: '1px solid #D4C5A9 ',
      backdropFilter: 'blur(10px)',
      transition: 'all 0.3s ease',
      animation: 'fadeIn 0.6s ease'
    },
    quoteTitle: {
      fontSize: '20px',
      fontWeight: '700',
      color: '#1f2b2c',
      marginBottom: '12px',
      fontFamily: 'serif',
      textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
      lineHeight: '1.4'
    },
    quoteDescription: {
      fontSize: '15px',
      color: '#FFF8DC',
      lineHeight: '1.8',
      fontFamily: 'serif',
      textAlign: 'justify',
      textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
    },
    decorativeElement: {
      position: 'absolute',
      width: '150px',
      height: '150px',
      border: '3px solid rgba(255, 215, 0, 0.2)',
      borderRadius: '50%',
      animation: 'float 6s ease-in-out infinite'
    },
    line: {
      position: 'absolute',
      height: '2px',
      background: 'linear-gradient(90deg, transparent, rgba(255, 215, 0, 0.4), transparent)',
      animation: 'moveLine 4s linear infinite'
    }
  };

  const keyframes = `
    @keyframes moveLine {
      0% {
        transform: translateX(-100%);
      }
      100% {
        transform: translateX(200%);
      }
    }

    @keyframes float {
      0%, 100% {
        transform: translateY(0) rotate(0deg);
      }
      50% {
        transform: translateY(-30px) rotate(180deg);
      }
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;

  return (
    <>
      <style>{keyframes}</style>
      <div style={styles.container}>
        {/* Animated Background Lines */}
        <div style={styles.backgroundLines}>
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              style={{
                ...styles.line,
                top: `${i * 5}%`,
                width: '100%',
                animationDelay: `${i * 0.2}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        {/* Decorative Elements */}
        <div style={{...styles.decorativeElement, top: '10%', left: '5%', animationDelay: '0s'}} />
        <div style={{...styles.decorativeElement, bottom: '15%', right: '8%', animationDelay: '2s'}} />

        <div style={styles.contentWrapper}>
          {/* Left Video Section */}
          <div style={styles.videoSection}>
            <div style={styles.videoWrapper}>
              <video 
                style={styles.video}
                autoPlay 
                loop 
                muted
                playsInline
              >
                <source src={f1} type="video/mp4" />
              </video>
            </div>
            <div style={styles.videoWrapper}>
              <video 
                style={styles.video}
                autoPlay 
                loop 
                muted
                playsInline
              >
                               <source src={f1} type="video/mp4" />

              </video>
            </div>
          </div>

          {/* Right Quotes Section */}
          <div style={styles.quotesSection}>
            <div ref={scrollContainerRef} style={styles.scrollContainer}>
              {tamilQuotes.map((quote, index) => (
                <div key={index} style={styles.quoteCard}>
                  <h3 style={styles.quoteTitle}>{quote.title}</h3>
                  <p style={styles.quoteDescription}>{quote.description}</p>
                </div>

              ))}
            </div>
        </div>
      </div>
      </div>
    </>
  );
};
export default Videos;