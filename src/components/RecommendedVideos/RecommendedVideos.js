import { Avatar } from '@material-ui/core';
import React from 'react';
import './Video.css';
import './RecommendedVideos.css';

const RecommendedVideos = () => {
const urlList = [
    {
    src: `https://www.youtube.com/embed/ufPCITfUQnQ?list=PLMY9nrA_sDPrVDt46wA15QuAIoAcfBI-N`,
    title:'Top 10 VS Code Themes',
	views:'2.4K Views',
    timestamp: '2 months ago',
	channelImage:'https://yt3.ggpht.com/ytc/AAUvwngMK1ERUHjEz1SDHQYO0jE3rGjpIzdpEUpiGR7d=s176-c-k-c0x00ffffff-no-rj-mo',
	channel:'Brian Design',
	image:'https://i.ytimg.com/vi/6etaWaiMkvM/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBNPbzaQtDuTjo18T0Xr8nGjIxAxg'
    },
    {
      src: `https://www.youtube.com/embed/v1JAUiqskiw?list=PLMY9nrA_sDPrVDt46wA15QuAIoAcfBI-N`,
	title:'Java Full Course | Java Tutorial for Beginners [2020] [NEW]',
	views:'52.1K Views',
	timestamp:'3 months ago',
	channelImage:'https://yt3.ggpht.com/ytc/AAUvwnjjfvVnm4hIninPJdNRfwQ_QforbmpKGG20LmEj6g=s176-c-k-c0x00ffffff-no-rj-mo',
	channel:'Amigoscode',
	image:'https://i.ytimg.com/vi/Qgl81fPcLc8/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLC48ERVTbZF4BcNWkqhoxruUZ6rxw'
				
    },
    {
      src: `https://www.youtube.com/embed/N0wHweOu-LQ?list=PLMY9nrA_sDPrVDt46wA15QuAIoAcfBI-N`,
      title:'Java Full Course | Java Tutorial for Beginners [2020] [NEW]',
	views:'52.1K Views',
	timestamp:'3 months ago',
	channelImage:'https://yt3.ggpht.com/ytc/AAUvwnjjfvVnm4hIninPJdNRfwQ_QforbmpKGG20LmEj6g=s176-c-k-c0x00ffffff-no-rj-mo',
	channel:'Amigoscode',
	image:'https://i.ytimg.com/vi/Qgl81fPcLc8/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLC48ERVTbZF4BcNWkqhoxruUZ6rxw'

    },
    {
      src: `https://www.youtube.com/embed/xxbc3wAztl0?list=PLMY9nrA_sDPrVDt46wA15QuAIoAcfBI-N`,
      title:'Java Full Course | Java Tutorial for Beginners [2020] [NEW]',
	views:'52.1K Views',
	timestamp:'3 months ago',
	channelImage:'https://yt3.ggpht.com/ytc/AAUvwnjjfvVnm4hIninPJdNRfwQ_QforbmpKGG20LmEj6g=s176-c-k-c0x00ffffff-no-rj-mo',
	channel:'Amigoscode',
	image:'https://i.ytimg.com/vi/Qgl81fPcLc8/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLC48ERVTbZF4BcNWkqhoxruUZ6rxw'

    },
    {
      src: `https://www.youtube.com/embed/xxbc3wAztl0?list=PLMY9nrA_sDPrVDt46wA15QuAIoAcfBI-N`,
      title:'Java Full Course | Java Tutorial for Beginners [2020] [NEW]',
	views:'52.1K Views',
	timestamp:'3 months ago',
	channelImage:'https://yt3.ggpht.com/ytc/AAUvwnjjfvVnm4hIninPJdNRfwQ_QforbmpKGG20LmEj6g=s176-c-k-c0x00ffffff-no-rj-mo',
	channel:'Amigoscode',
	image:'https://i.ytimg.com/vi/Qgl81fPcLc8/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLC48ERVTbZF4BcNWkqhoxruUZ6rxw'

    },
    {
      src: `https://www.youtube.com/embed/xxbc3wAztl0?list=PLMY9nrA_sDPrVDt46wA15QuAIoAcfBI-N`,
      title:'Java Full Course | Java Tutorial for Beginners [2020] [NEW]',
	views:'52.1K Views',
	timestamp:'3 months ago',
	channelImage:'https://yt3.ggpht.com/ytc/AAUvwnjjfvVnm4hIninPJdNRfwQ_QforbmpKGG20LmEj6g=s176-c-k-c0x00ffffff-no-rj-mo',
	channel:'Amigoscode',
	image:'https://i.ytimg.com/vi/Qgl81fPcLc8/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLC48ERVTbZF4BcNWkqhoxruUZ6rxw'

    },
    {
      src: `https://www.youtube.com/embed/xxbc3wAztl0?list=PLMY9nrA_sDPrVDt46wA15QuAIoAcfBI-N`,
      title:'Java Full Course | Java Tutorial for Beginners [2020] [NEW]',
	views:'52.1K Views',
	timestamp:'3 months ago',
	channelImage:'https://yt3.ggpht.com/ytc/AAUvwnjjfvVnm4hIninPJdNRfwQ_QforbmpKGG20LmEj6g=s176-c-k-c0x00ffffff-no-rj-mo',
	channel:'Amigoscode',
	image:'https://i.ytimg.com/vi/Qgl81fPcLc8/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLC48ERVTbZF4BcNWkqhoxruUZ6rxw'

    },
    {
      src: `https://www.youtube.com/embed/xxbc3wAztl0?list=PLMY9nrA_sDPrVDt46wA15QuAIoAcfBI-N`,
      title:'Java Full Course | Java Tutorial for Beginners [2020] [NEW]',
	views:'52.1K Views',
	timestamp:'3 months ago',
	channelImage:'https://yt3.ggpht.com/ytc/AAUvwnjjfvVnm4hIninPJdNRfwQ_QforbmpKGG20LmEj6g=s176-c-k-c0x00ffffff-no-rj-mo',
	channel:'Amigoscode',
	image:'https://i.ytimg.com/vi/Qgl81fPcLc8/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLC48ERVTbZF4BcNWkqhoxruUZ6rxw'

    },
  ];

  
	return (
		<div className='recommendedVideos'>
			<h2>Recommended</h2>

			<div className='recommendedVideos__videos'>
				
				{urlList.map((el, key) => (
					<div className='video'>
					<img src={el.image} alt='Thumbnail' className='video__thumbnail' />

					<div className='video__info'>
						<Avatar
							src={el.channelImage}
							alt='Channel Image'
							className='video__avatar'
						/>

						<div className='video__text'>
							<h4>{el.title}</h4>
							<p>{el.channel}</p>
							<p>
								{el.views} • {el.timestamp}
							</p>
						</div>
					</div>
				</div>
		
			))}	
			 </div>
        </div>
				);
};

export default RecommendedVideos;
