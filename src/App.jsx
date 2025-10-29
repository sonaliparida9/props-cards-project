
import { Dice1 } from 'lucide-react';
import Card from './components/card'

function App() {

  const jobOpenings = [
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    companyName: "Meta",
    datePosted: "5 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$68/hr",
    location: "Hyderabad, India",
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    companyName: "Apple",
    datePosted: "2 weeks ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$60/hr",
    location: "Bangalore, India",
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    companyName: "Amazon",
    datePosted: "10 weeks ago",
    post: "Data Engineer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Mumbai, India",
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    companyName: "Netflix",
    datePosted: "3 days ago",
    post: "UI/UX Designer",
    tag1: "Contract",
    tag2: "Mid Level",
    pay: "$52/hr",
    location: "Delhi, India",
  },
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    companyName: "Google",
    datePosted: "1 week ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$72/hr",
    location: "Bangalore, India",
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    companyName: "Microsoft",
    datePosted: "4 weeks ago",
    post: "Cloud Solutions Architect",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "Pune, India",
  },
  {
    brandLogo: "https://logo.clearbit.com/tesla.com",
    companyName: "Tesla",
    datePosted: "6 days ago",
    post: "Machine Learning Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$65/hr",
    location: "Noida, India",
  },
  {
    brandLogo: "https://logos-world.net/wp-content/uploads/2020/06/Adobe-Logo-2020-present.png",
    companyName: "Adobe",
    datePosted: "2 days ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$50/hr",
    location: "Chennai, India",
  },
  {
    brandLogo: "https://logo.clearbit.com/nvidia.com",
    companyName: "NVIDIA",
    datePosted: "3 weeks ago",
    post: "AI Research Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$80/hr",
    location: "Bangalore, India",
  },
  {
    brandLogo: "https://logo.clearbit.com/oracle.com",
    companyName: "Oracle",
    datePosted: "8 days ago",
    post: "DevOps Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$55/hr",
    location: "Hyderabad, India",
  },
];
  
  return (
    <div className='parent'>
      {jobOpenings.map(function(elem,idx){


        return <div key={idx}>
           <Card brandLogo={elem.brandLogo} datePosted={elem.datePosted} company = {elem.companyName} 
           post = {elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} />
        </div> 
      })}
    </div>
  )
}

export default App
