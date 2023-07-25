import Icon from '@mdi/react';
import { mdiStarOutline, mdiEyeOutline, mdiShareVariantOutline } from '@mdi/js';

const mainContent = () => {
  return (
    <div className='mainContent grid px-4 pt-4'>

      <div className='flex place-items-center mb-1 col-start-1 col-end-2'>
        <span className="font-bold">Your Projects</span>
      </div>

      <div className="container mx-auto max-w-full col-start-1 col-end-2 gap-3 grid projectContent">
        
        <div className="relative bg-white rounded-lg shadow-md px-4 pt-4">
          <div className='bg-blue-500/100 w-3 absolute top-0 left-0 h-full' />
          <h2 className="text-xl font-bold mb-2 ml-3">EcoSense - Environmental Monitoring App</h2>
          <p className="ml-3">EcoSense is a mobile application that empowers users to track and visualize their environmental impact. The app collects data on carbon footprint, water usage, and energy consumption, offering personalized recommendations for sustainable living.</p>
          <div className="flex gap-x-3 place-content-end pr-1 py-5">
          <Icon path={mdiStarOutline} size={1} />
          <Icon path={mdiEyeOutline} size={1} />
          <Icon path={mdiShareVariantOutline} size={1} />
            </div>
          </div>

          <div className="relative bg-white rounded-lg shadow-md px-4 pt-4">
          <div className='bg-blue-500/100 w-3 absolute top-0 left-0 h-full' />
          <h2 className="text-xl font-bold mb-2 ml-3">SmartHome Automation System</h2>
          <p className="ml-3">The SmartHome Automation System is a comprehensive solution for managing and controlling various home devices remotely. Users can control lighting, temperature, security, and entertainment systems using a user-friendly mobile app or voice commands.</p>
          <div className="flex gap-x-3 place-content-end pr-1 py-5">
          <Icon path={mdiStarOutline} size={1} />
          <Icon path={mdiEyeOutline} size={1} />
          <Icon path={mdiShareVariantOutline} size={1} />
            </div>
          </div>

          <div className="relative bg-white rounded-lg shadow-md px-4 pt-4">
          <div className='bg-blue-500/100 w-3 absolute top-0 left-0 h-full' />
          <h2 className="text-xl font-bold mb-2 ml-3">Virtual Art Gallery</h2>
          <p className="ml-3">The Virtual Art Gallery is an immersive online platform where artists can showcase their work and art enthusiasts can explore a diverse collection of artworks. The gallery features interactive 3D exhibits and supports digital art formats.</p>
          <div className="flex gap-x-3 place-content-end pr-1 py-5">
          <Icon path={mdiStarOutline} size={1} />
          <Icon path={mdiEyeOutline} size={1} />
          <Icon path={mdiShareVariantOutline} size={1} />
            </div>
          </div>

          <div className="relative bg-white rounded-lg shadow-md px-4 pt-4">
          <div className='bg-blue-500/100 w-3 absolute top-0 left-0 h-full' />
          <h2 className="text-xl font-bold mb-2 ml-3">HealthPal - Personal Health Tracker</h2>
          <p className="ml-3">HealthPal is a health and wellness app that helps users maintain a healthy lifestyle. It allows users to track their daily activities, monitor vital signs, log meals, and set personalized fitness goals for improved well-being.</p>
          <div className="flex gap-x-3 place-content-end pr-1 py-5">
          <Icon path={mdiStarOutline} size={1} />
          <Icon path={mdiEyeOutline} size={1} />
          <Icon path={mdiShareVariantOutline} size={1} />
            </div>
          </div>

          <div className="relative bg-white rounded-lg shadow-md px-4 pt-4">
          <div className='bg-blue-500/100 w-3 absolute top-0 left-0 h-full' />
          <h2 className="text-xl font-bold mb-2 ml-3">CodeCrafters - Coding Education Platform</h2>
          <p className="ml-3">CodeCrafters is an interactive coding education platform designed for beginners and intermediate learners. It provides step-by-step coding challenges, real-world projects, and a supportive community to enhance programming skills.</p>
          <div className="flex gap-x-3 place-content-end pr-1 py-5">
          <Icon path={mdiStarOutline} size={1} />
          <Icon path={mdiEyeOutline} size={1} />
          <Icon path={mdiShareVariantOutline} size={1} />
            </div>
          </div>

          <div className="relative bg-white rounded-lg shadow-md px-4 pt-4">
          <div className='bg-blue-500/100 w-3 absolute top-0 left-0 h-full' />
          <h2 className="text-xl font-bold mb-2 ml-3">TourBuddy - Travel Planning Assistant</h2>
          <p className="ml-3"> TourBuddy is a travel planning assistant that simplifies the process of creating customized itineraries. It offers curated travel recommendations, maps, and time-saving tools for booking flights, accommodations, and attractions.</p>
          <div className="flex gap-x-3 place-content-end pr-1 py-5">
          <Icon path={mdiStarOutline} size={1} />
          <Icon path={mdiEyeOutline} size={1} />
          <Icon path={mdiShareVariantOutline} size={1} />
            </div>
          </div>
          
      </div>

      <div className="col-start-2 col-end-3 row-start-1 row-end-2">
        Announcement
        AnnouncementContents
        Trending
        TrendingContents
      </div>
    </div>
  )
}

export default mainContent