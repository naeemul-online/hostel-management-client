import Heading from "../../../components/Heading/Heading";
const membershipPlans = [
    {
      name: 'Silver',
      price: 9.99,
      features: ['Access to basic meals', 'Monthly meal plans', 'Community support'],
    },
    {
      name: 'Gold',
      price: 19.99,
      features: ['Access to all meals', 'Weekly meal plans', 'Priority support'],
    },
    {
      name: 'Platinum',
      price: 29.99,
      features: ['Access to all meals', 'Daily meal plans', '24/7 support'],
    },
  ];

const MembershipSection = () => {
  

  //   const handleUpgradeClick = (packageName) => {
  //     history.push(`/checkout/${packageName}`);
  //   };

  return (
    <div className="container mx-auto px-4 py-12">
      <Heading Heading="Upgrade to Premium"></Heading>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {membershipPlans.map((plan, index) => (
          <div
            key={index}
            className="bg-white border shadow-md rounded-lg overflow-hidden"
          >
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold mb-2">{plan.name} Package</h3>
              <p className="text-gray-600 mb-4">${plan.price}/month</p>
              <ul className="text-left mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="mb-2">
                    - {feature}
                  </li>
                ))}
              </ul>
              <button
                // onClick={() => handleUpgradeClick(plan.name)}
                className="text-white bg-orange-500 hover:bg-orange-600 rounded-md px-4 py-2"
              >
                Upgrade to {plan.name}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MembershipSection;
