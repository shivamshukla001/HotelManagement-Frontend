// src/Book.tsx
import React, { useRef, useState } from "react";

interface BookingForm {
  checkinDate: string;
  checkoutDate: string;
  guests: string;
  adults: string;
  children: string;
  roomType: string;
  noOfRooms: string;
  fullName: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  address: string;
  cardNumber: string;
  holderName: string;
  expireDate: string;
  cvv: string;
  specialRequest: string;
  idProof: File | null;
}

import {
  FaCalendarAlt,
  FaCalendarCheck,
  FaUsers,
  FaUser,
  FaChild,
  FaBed,
  FaDoorOpen,
  FaEnvelope,
  FaPhone,
  FaGlobe,
  FaCity,
  FaHome,
  FaCreditCard,
  FaIdCard,
  FaRegCalendarAlt,
  FaLock,
  FaUpload,
  FaPaypal,
  FaMoneyBillWave,
  FaRegBell,
  
} from "react-icons/fa";

export default function Book() {
  const formRef = useRef(null);

  const [formData, setFormData] = useState<BookingForm>({
    checkinDate: "",
    checkoutDate: "",
    guests: "",
    adults: "",
    children: "",
    roomType: "",
    noOfRooms: "",
    fullName: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    address: "",
    cardNumber: "",
    holderName: "",
    expireDate: "",
    cvv: "",
    specialRequest: "",
    idProof: null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;

    if (files) {
      setFormData({ ...formData, idProof: files[0] });
      return;
    }

    setFormData({ ...formData, [name as keyof BookingForm]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const submitData = new FormData();

      // Map frontend field names to backend field names
      submitData.append("check_in_date", formData.checkinDate);
      submitData.append("check_out_date", formData.checkoutDate);
      submitData.append("number_of_guest", formData.guests);
      submitData.append("adults", formData.adults);
      submitData.append("children", formData.children);
      submitData.append("room_type", formData.roomType);
      submitData.append("number_of_rooms", formData.noOfRooms);
      submitData.append("full_name", formData.fullName);
      submitData.append("email", formData.email);
      submitData.append("phone_number", formData.phone);
      submitData.append("country", formData.country);
      submitData.append("city", formData.city);
      submitData.append("address", formData.address);
      submitData.append("message", formData.specialRequest);

      // Append file if exists
      if (formData.idProof) {
        submitData.append("idProof", formData.idProof);
      }

      const response = await fetch("http://localhost:8000/api/v1/user", {
        method: "POST",
        body: submitData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Network response was not ok");
      }

      const result = await response.json();
      console.log("SUCCESS:", result);
      alert("Booking submitted successfully!");
      
      // Reset form on success
      setFormData({
        checkinDate: "",
        checkoutDate: "",
        guests: "",
        adults: "",
        children: "",
        roomType: "",
        noOfRooms: "",
        fullName: "",
        email: "",
        phone: "",
        country: "",
        city: "",
        address: "",
        cardNumber: "",
        holderName: "",
        expireDate: "",
        cvv: "",
        specialRequest: "",
        idProof: null,
      });

    } catch (error) {
      console.error("Error:", error);
      alert("Error submitting booking: " + (error as Error).message);
    }
  };

  const handleResetClick = () => {
    console.log("Form reset — all fields cleared.");
    setFormData({
      checkinDate: "",
      checkoutDate: "",
      guests: "",
      adults: "",
      children: "",
      roomType: "",
      noOfRooms: "",
      fullName: "",
      email: "",
      phone: "",
      country: "",
      city: "",
      address: "",
      cardNumber: "",
      holderName: "",
      expireDate: "",
      cvv: "",
      specialRequest: "",
      idProof: null,
    });
  };

  return (
    <>
      <div className="min-h-screen bg-[rgb(28,28,29)] text-[rgb(229,230,190)]">

        <div className="absolute flex mt-23 mx-40 rounded-lg shadow-lg max-sm:hidden ">
          <h1 className="absolute text-5xl mt-40 mx-100 text-yellow-400">Book Your Room</h1>
          <p className="absolute mt-50 mx-80 text-white">Experience Luxury Experience at SkyShot, Reserver Your Stay Today</p>
           <img className="w-[600px] h-[400px] rounded-tl-2xl rounded-bl-2xl" src="/booknowbanner.jpg" alt="" />
          <img className="w-[600px] h-[400px] rounded-tr-2xl rounded-br-2xl" src="/booknowbanner2.jpg" alt="" />
        </div>
        <div className="absolute left-160 text-center text-3xl mt-136 mb-12 heading max-sm:hidden ">
          <h1>Reservation Details</h1>
        </div>
        <form
          id="bookingForm"
          className="absolute mt-152 left-72 max-w-[60%] p-[30px_40px] mb-152 form max-sm:hidden"
          onSubmit={handleSubmit}
          ref={formRef}
        >
          {/* CARD 1 */}
          <div className="border-2 border-[#ccc] p-[25px] mb-10 rounded-[15px] bg-[rgba(255,255,255,0.05)] cardSection">
            <h1 className="mb-4">Booking Details</h1>
            <hr />

            {/* Check-in / Check-out */}
            <div className="flex justify-between gap-5 p-[10px_20px] mt-12 check">
              <div>
                <label className="block">Check-in Date</label>
                <div className="relative mt-2.5">
                  <FaCalendarAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-yellow-400 text-xl" />
                  <input type="date" name="checkinDate" required value={formData.checkinDate} onChange={handleChange} className="mt-0 p-2.5 w-[300px] border rounded-[10px] cursor-pointer pl-12" />
                </div>
              </div>

              <div>
                <label className="block">Check-out Date</label>
                <div className="relative mt-2.5">
                  <FaCalendarCheck className="absolute left-3 top-1/2 -translate-y-1/2 text-yellow-400 text-xl" />
                  <input
                    type="date"
                    name="checkoutDate"
                    required
                    value={formData.checkoutDate}
                    onChange={handleChange}
                    className="mt-0 p-2.5 w-[300px] border rounded-[10px] cursor-pointer pl-12"
                  />
                </div>
              </div>
            </div>

            {/* Guests / Adults / Children */}
            <div className="flex justify-between gap-5 p-[10px_20px] mt-12 check">
              <div>
                <label className="block">Number of Guests</label>
                <div className="relative mt-2.5">
                  <FaUsers className="absolute left-3 top-1/2 -translate-y-1/2 text-yellow-400 text-xl" />
                  <input
                    type="number"
                    name="guests"
                    required
                    value={formData.guests}
                    onChange={handleChange}
                    placeholder="Number Of Peoples"
                    className=" p-2.5 w-[230px] border rounded-[10px] cursor-pointer pl-12"
                  />
                </div>
              </div>

              <div>
                <label className="block">Adults</label>
                <div className="relative mt-2.5">
                  <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-yellow-400 text-xl" />
                  <input
                    type="number"
                    name="adults"
                    required
                    value={formData.adults}
                    onChange={handleChange}
                    placeholder="How Many Adults?"
                    className="p-2.5 w-[230px] border rounded-[10px] cursor-pointer pl-12"
                  />
                </div>
              </div>

              <div>
                <label className="block">Children</label>
                <div className="relative mt-2.5">
                  <FaChild className="absolute left-3 top-1/2 -translate-y-1/2 text-yellow-400 text-xl" />
                  <input
                    type="number"
                    name="children"
                    required
                    value={formData.children}
                    onChange={handleChange}
                    placeholder="If Any Children"
                    className="p-2.5 w-[230px] border rounded-[10px] cursor-pointer pl-12"
                  />
                </div>
              </div>
            </div>

            {/* Room Type / No. of Rooms */}
            <div className="flex justify-between gap-5 p-[10px_20px] mt-12 check mate">
              <div>
                <label className="block">Room Types</label>
                <div className="relative mt-2.5">
                  <FaBed className="absolute left-3 top-1/2 -translate-y-1/2 text-yellow-400 text-xl" />
                  <input
                    type="text"
                    name="roomType"
                    required
                    value={formData.roomType}
                    onChange={handleChange}
                    placeholder="Any Specific Room Type"
                    className=" p-2.5 w-[300px] border rounded-[10px] cursor-pointer pl-12"
                  />
                </div>
              </div>

              <div>
                <label className="block">No. Of Rooms</label>
                <div className="relative mt-2.5">
                  <FaDoorOpen className="absolute left-3 top-1/2 -translate-y-1/2 text-yellow-400 text-xl" />
                  <input
                    type="number"
                    name="noOfRooms"
                    required
                    value={formData.noOfRooms}
                    onChange={handleChange}
                    placeholder="How Many Rooms?"
                    className=" p-2.5 w-[300px] border rounded-[10px] cursor-pointer pl-12"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* CARD 2: Guest Information */}
          <div className="border-2 border-[#ccc] p-[25px] mb-[40px] rounded-[15px] bg-[rgba(255,255,255,0.05)] cardSection">
            <h1 className="mb-4">Guest Information</h1>
            <hr />

            {/* Full Name */}
            <div className="mt-12 check1">
              <label className="block">Full Name</label>
              <div className="relative mt-2.5">
                <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-yellow-400 text-xl" />
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Please Enter Your Full Name"
                  className="p-2.5 w-[98%] border rounded-[10px] cursor-pointer pl-12"
                />
              </div>
            </div>

            <div className="flex justify-between gap-5 p-[10px_20px] mt-12 check">
              <div>
                <label className="block">Email Address</label>
                <div className="relative mt-2.5">
                  <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-yellow-400 text-xl" />
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter Your Email"
                    className=" p-2.5 w-[300px] border rounded-[10px] pl-12"
                  />
                </div>
              </div>

              <div>
                <label className="block">Phone No</label>
                <div className="relative mt-2.5">
                  <FaPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-yellow-400 text-xl" />
                  <input
                    type="text"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your Phone Number"
                    className="p-2.5 w-[300px] border rounded-[10px] cursor-pointer pl-12"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-between gap-5 p-[10px_20px] mt-12 check">
              <div>
                <label className="block">Country</label>
                <div className="relative mt-2.5">
                  <FaGlobe className="absolute left-3 top-1/2 -translate-y-1/2 text-yellow-400 text-xl" />
                  <input
                    type="text"
                    name="country"
                    required
                    value={formData.country}
                    onChange={handleChange}
                    placeholder="Country Name"
                    className=" p-2.5 w-[300px] border rounded-[10px] cursor-pointer pl-12"
                  />
                </div>
              </div>

              <div>
                <label className="block">City</label>
                <div className="relative mt-2.5">
                  <FaCity className="absolute left-3 top-1/2 -translate-y-1/2 text-yellow-400 text-xl" />
                  <input
                    type="text"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="City Name"
                    className="p-2.5 w-[300px] border rounded-[10px] cursor-pointer pl-12"
                  />
                </div>
              </div>
            </div>

            {/* Address (textarea) */}
            <div className="mt-12 check1">
              <label className="block">Address</label>
              <div className="relative mt-2.5">
                <FaHome className="absolute left-3 top-8 text-yellow-400 text-xl" />
                <textarea
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter Your Address"
                  className="p-[30px] border w-[94%] rounded-[10px] cursor-pointer pl-12"
                />
              </div>
            </div>
          </div>

          {/* CARD 3: Payment Method */}
          <div className="border-[2px] border-[#ccc] p-[25px] mb-[40px] rounded-[15px] bg-[rgba(255,255,255,0.05)] cardSection">
            <h1 className="mb-[1rem]">Payment Method</h1>
            <hr />

            <h4 className="mt-[1rem] mb-[1rem]">Select Payment Method</h4>
            <div className="flex gap-[40px] mt-[10px] cards">
              <button
                className="flex items-center gap-2 ml-[40px] px-[10px] py-[10px] border-2 border-[rgb(229,230,190)] rounded-[10px] bg-[rgb(28,28,29)] btn text-[rgb(229,230,190)] hover:bg-[rgb(229,230,190)] hover:text-[rgb(28,28,29)]"
                type="button"
              >
                <FaPaypal /> Paypal
              </button>
              <button
                className="flex items-center gap-2 ml-[40px] px-[10px] py-[10px] border-2 border-[rgb(229,230,190)] rounded-[10px] bg-[rgb(28,28,29)] btn text-[rgb(229,230,190)] hover:bg-[rgb(229,230,190)] hover:text-[rgb(28,28,29)]"
                type="button"
              >
                <FaCreditCard /> Credit Card
              </button>
              <button
                className="flex items-center gap-2 ml-[40px] px-[10px] py-[10px] border-2 border-[rgb(229,230,190)] rounded-[10px] bg-[rgb(28,28,29)] btn text-[rgb(229,230,190)] hover:bg-[rgb(229,230,190)] hover:text-[rgb(28,28,29)]"
                type="button"
              >
                <FaMoneyBillWave /> Paytm
              </button>
              <button
                className="flex items-center gap-2 ml-[40px] px-[10px] py-[10px] border-2 border-[rgb(229,230,190)] rounded-[10px] bg-[rgb(28,28,29)] btn text-[rgb(229,230,190)] hover:bg-[rgb(229,230,190)] hover:text-[rgb(28,28,29)]"
                type="button"
              >
                <FaMoneyBillWave /> Cash on Arrival
              </button>
            </div>

            {/* Card number & Holder */}
            <div className="flex justify-between gap-5 p-[10px_20px] mt-[1rem] check">
              <div>
                <label className="block">Card Number</label>
                <div className="relative mt-[10px]">
                  <FaCreditCard className="absolute left-3 top-1/2 -translate-y-1/2 text-yellow-400 text-xl" />
                  <input
                    type="number"
                    name="cardNumber"
                    required
                    value={formData.cardNumber}
                    onChange={handleChange}
                    placeholder="Card Number"
                    className="mt-[0px] p-[10px] border w-[300px] rounded-[10px] cursor-pointer pl-12"
                  />
                </div>
              </div>

              <div>
                <label className="block">Card Holder Name</label>
                <div className="relative mt-[10px]">
                  <FaIdCard className="absolute left-3 top-1/2 -translate-y-1/2 text-yellow-400 text-xl" />
                  <input
                    type="text"
                    name="holderName"
                    required
                    value={formData.holderName}
                    onChange={handleChange}
                    placeholder="Card Owner Name"
                    className="mt-[0px] p-[10px] border w-[300px] rounded-[10px] pl-12"
                  />
                </div>
              </div>
            </div>

            {/* Expire date / CVV */}
            <div className="flex justify-between gap-5 p-[10px_20px] mt-[3rem] check">
              <div>
                <label className="block">Expire Date</label>
                <div className="relative mt-[10px]">
                  <FaRegCalendarAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-yellow-400 text-xl" />
                  <input
                    type="date"
                    name="expireDate"
                    required
                    value={formData.expireDate}
                    onChange={handleChange}
                    className="mt-[0px] p-[10px] border w-[300px] rounded-[10px] cursor-pointer pl-12"
                  />
                </div>
              </div>

              <div>
                <label className="block">CVV</label>
                <div className="relative mt-[10px]">
                  <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-yellow-400 text-xl" />
                  <input
                    type="text"
                    name="cvv"
                    required
                    value={formData.cvv}
                    placeholder="CVV Number"
                    minLength={3}
                    maxLength={3}
                    pattern="\d{3}"
                    onChange={handleChange}
                    className="mt-[0px] p-[10px] border w-[300px] rounded-[10px] pl-12"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* CARD 4: Additional Services */}
          <div className="border-[2px] border-[#ccc] p-[25px] mb-[40px] rounded-[15px] bg-[rgba(255,255,255,0.05)] cardSection">
            <h1 className="mb-[1rem]">Additional Services</h1>
            <hr />

            <div className="flex justify-between gap-5 p-[10px_20px] mt-[1rem] checkyou">
              <div className="p-[10px_20px] bg-[rgb(28,28,29)] border-2 border-[rgb(229,230,190)] rounded-[10px] checkbox">
                <label>
                  <input type="checkbox" name="airportPickup" className="mr-2" /> Airport Pickup
                </label>
              </div>

              <div className="p-[10px_20px] bg-[rgb(28,28,29)] border-2 border-[rgb(229,230,190)] rounded-[10px] checkbox">
                <label>
                  <input type="checkbox" name="breakfast" className="mr-2" /> Breakfast Included
                </label>
              </div>

              <div className="p-[10px_20px] bg-[rgb(28,28,29)] border-2 border-[rgb(229,230,190)] rounded-[10px] checkbox">
                <label>
                  <input type="checkbox" name="playground" className="mr-2" /> Playground Included
                </label>
              </div>

              <div className="p-[10px_20px] bg-[rgb(28,28,29)] border-2 border-[rgb(229,230,190)] rounded-[10px] checkbox">
                <label>
                  <input type="checkbox" name="dinner" className="mr-2" /> Dinner Included
                </label>
              </div>
            </div>

            <div className="flex justify-between gap-5 p-[10px_20px] mt-[1rem] checkyou">
              <div className="p-[10px_20px] bg-[rgb(28,28,29)] border-2 border-[rgb(229,230,190)] rounded-[10px] checkbox">
                <label>
                  <input type="checkbox" name="gym" className="mr-2" /> Gym Access
                </label>
              </div>

              <div className="p-[10px_20px] bg-[rgb(28,28,29)] border-2 border-[rgb(229,230,190)] rounded-[10px] checkbox">
                <label>
                  <input type="checkbox" name="laundry" className="mr-2" /> Laundry Included
                </label>
              </div>

              <div className="p-[10px_20px] bg-[rgb(28,28,29)] border-2 border-[rgb(229,230,190)] rounded-[10px] checkbox">
                <label>
                  <input type="checkbox" name="shower" className="mr-2" /> Hot Shower
                </label>
              </div>

              <div className="p-[10px_20px] bg-[rgb(28,28,29)] border-2 border-[rgb(229,230,190)] rounded-[10px] checkbox">
                <label>
                  <input type="checkbox" name="roomService" className="mr-2" /> 24/7 Room Service
                </label>
              </div>
            </div>

            <h4 className="mt-[5rem]">Special Request</h4>
            <div className="relative">
              <FaRegBell className="absolute left-3 top-11 text-yellow-400 text-xl" />
              <textarea
                name="specialRequest"
                className="p-[40px] border w-[90%] rounded-[10px] pl-12"
                value={formData.specialRequest}
                onChange={handleChange}
              />
            </div>

            <h4 className="mt-[3rem]">Upload ID Proof</h4>
            <div className="relative">
              <FaUpload className="absolute left-3 top-4 text-yellow-400 text-xl" />
              <input
                type="file"
                name="idProof"
                accept=".jpg,.jpeg,.png"
                onChange={handleChange}
                className="p-[10px_20px] border-[3px] border-dotted border-[greenyellow] rounded-[10px] w-[90%] cursor-pointer pl-12"
              />
            </div>
            <p>Accepted Formats: .jpg, .jpeg, .png</p>
          </div>

          <div className="flex items-center justify-center m-[3rem] gap-[40px] confirmbtn">
            <button
              type="button"
              className="bg-red-600 px-[10px] py-[10px] font-bold text-white confirmbtn1"
              onClick={handleResetClick}
            >
              Reset Form
            </button>
            <button type="submit" className="bg-green-600 px-[10px] py-[10px] font-bold text-white confirmbtn2">
              Confirm Booking
            </button>
          </div>
        </form>

        {/* For mobile device */}
        <div className="absolute  mt-23   shadow-lg md:hidden ">
          <h1 className="absolute text-3xl left-20 mt-24  text-yellow-400">Book Your Room</h1>
          <p className="absolute mt-34 left-10  text-white">Experience Luxury Experience at SkyShot</p>
           <img className="w-[400px] h-[250px] rounded-lg" src="/booknowbanner.jpg" alt="" />
        </div>

        <div className="absolute text-center text-2xl left-20 mt-94 mb-60 heading md:hidden">
          <h1>Reservation Details</h1>
        </div>
        

        <form 
          id="bookingForm"
          className="absolute mt-112 left-4 mb-152 form md:hidden"
          onSubmit={handleSubmit}
          ref={formRef}
        >
          {/* CARD 1 */}
          <div className="p-[25px] max-w-[350px] mb-10 rounded-[15px] bg-[rgba(255,255,255,0.05)] cardSection">
            <h1 className="mb-4">Booking Details</h1>
            <hr />

            {/* Check-in / Check-out */}
            <div className="grid justify-between gap-5  mt-12 check">
              <div>
                <label className="block">Check-in Date</label>
                <div className="relative mt-2.5">
                  <FaCalendarAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-yellow-400 text-xl" />
                  <input type="date" name="checkinDate" required value={formData.checkinDate} onChange={handleChange} className="mt-0 p-2.5 w-[300px] border rounded-[10px] cursor-pointer pl-12" />
                </div>
              </div>

              <div>
                <label className="block">Check-out Date</label>
                <div className="relative mt-2.5">
                  <FaCalendarCheck className="absolute left-3 top-1/2 -translate-y-1/2 text-yellow-400 text-xl" />
                  <input
                    type="date"
                    name="checkoutDate"
                    required
                    value={formData.checkoutDate}
                    onChange={handleChange}
                    className="mt-0 p-2.5 w-[300px] border rounded-[10px] cursor-pointer pl-12"
                  />
                </div>
              </div>
            </div>

            {/* Guests / Adults / Children */}
            <div className="grid justify-between gap-5  mt-6 check">
              <div>
                <label className="block">Number of Guests</label>
                <div className="relative mt-2.5">
                  <FaUsers className="absolute left-3 top-1/2 -translate-y-1/2 text-yellow-400 text-xl" />
                  <input
                    type="number"
                    name="guests"
                    required
                    value={formData.guests}
                    onChange={handleChange}
                    placeholder="Number Of Peoples"
                    className=" p-2.5 w-[300px] border rounded-[10px] cursor-pointer pl-12"
                  />
                </div>
              </div>

              <div>
                <label className="block">Adults</label>
                <div className="relative mt-2.5">
                  <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-yellow-400 text-xl" />
                  <input
                    type="number"
                    name="adults"
                    required
                    value={formData.adults}
                    onChange={handleChange}
                    placeholder="How Many Adults?"
                    className="p-2.5 w-[300px] border rounded-[10px] cursor-pointer pl-12"
                  />
                </div>
              </div>

              <div>
                <label className="block">Children</label>
                <div className="relative mt-2.5">
                  <FaChild className="absolute left-3 top-1/2 -translate-y-1/2 text-yellow-400 text-xl" />
                  <input
                    type="number"
                    name="children"
                    required
                    value={formData.children}
                    onChange={handleChange}
                    placeholder="If Any Children"
                    className="p-2.5 w-[300px] border rounded-[10px] cursor-pointer pl-12"
                  />
                </div>
              </div>
            </div>

            {/* Room Type / No. of Rooms */}
            <div className="grid justify-between gap-5  mt-6 check mate">
              <div>
                <label className="block">Room Types</label>
                <div className="relative mt-2.5">
                  <FaBed className="absolute left-3 top-1/2 -translate-y-1/2 text-yellow-400 text-xl" />
                  <input
                    type="text"
                    name="roomType"
                    required
                    value={formData.roomType}
                    onChange={handleChange}
                    placeholder="Any Specific Room Type"
                    className=" p-2.5 w-[300px] border rounded-[10px] cursor-pointer pl-12"
                  />
                </div>
              </div>

              <div>
                <label className="block">No. Of Rooms</label>
                <div className="relative mt-2.5">
                  <FaDoorOpen className="absolute left-3 top-1/2 -translate-y-1/2 text-yellow-400 text-xl" />
                  <input
                    type="number"
                    name="noOfRooms"
                    required
                    value={formData.noOfRooms}
                    onChange={handleChange}
                    placeholder="How Many Rooms?"
                    className=" p-2.5 w-[300px] border rounded-[10px] cursor-pointer pl-12"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* CARD 2: Guest Information */}
          <div className="  p-[25px] max-w-[350px] mb-10 rounded-[15px] bg-[rgba(255,255,255,0.05)] cardSection">
            <h1 className="mb-4">Guest Information</h1>
            <hr />

            {/* Full Name */}
            <div className="mt-12 check1">
              <label className="block">Full Name</label>
              <div className="relative mt-2.5">
                <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-yellow-400 text-xl" />
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Please Enter Your Full Name"
                  className="p-2.5 w-[98%] border rounded-[10px] cursor-pointer pl-12"
                />
              </div>
            </div>

            <div className="grid justify-between gap-5  mt-6 check">
              <div>
                <label className="block">Email Address</label>
                <div className="relative mt-2.5">
                  <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-yellow-400 text-xl" />
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter Your Email"
                    className=" p-2.5 w-[300px] border rounded-[10px] pl-12"
                  />
                </div>
              </div>

              <div>
                <label className="block">Phone No</label>
                <div className="relative mt-2.5">
                  <FaPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-yellow-400 text-xl" />
                  <input
                    type="text"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your Phone Number"
                    className="p-2.5 w-[300px] border rounded-[10px] cursor-pointer pl-12"
                  />
                </div>
              </div>
            </div>

            <div className="grid justify-between gap-5  mt-6 check">
              <div>
                <label className="block">Country</label>
                <div className="relative mt-2.5">
                  <FaGlobe className="absolute left-3 top-1/2 -translate-y-1/2 text-yellow-400 text-xl" />
                  <input
                    type="text"
                    name="country"
                    required
                    value={formData.country}
                    onChange={handleChange}
                    placeholder="Country Name"
                    className=" p-2.5 w-[300px] border rounded-[10px] cursor-pointer pl-12"
                  />
                </div>
              </div>

              <div>
                <label className="block">City</label>
                <div className="relative mt-2.5">
                  <FaCity className="absolute left-3 top-1/2 -translate-y-1/2 text-yellow-400 text-xl" />
                  <input
                    type="text"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="City Name"
                    className="p-2.5 w-[300px] border rounded-[10px] cursor-pointer pl-12"
                  />
                </div>
              </div>
            </div>

            {/* Address (textarea) */}
            <div className="mt-6 check1">
              <label className="block">Address</label>
              <div className="relative mt-2.5">
                <FaHome className="absolute left-3 top-10 text-yellow-400 text-xl" />
                <textarea
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter Your Address"
                  className="p-[30px] border  w-full rounded-[10px] cursor-pointer pt-10 pl-12"
                />
              </div>
            </div>
          </div>

          {/* CARD 3: Payment Method */}
          <div className=" p-[25px] mb-10 rounded-[15px] max-w-[350px] bg-[rgba(255,255,255,0.05)] cardSection">
            <h1 className="mb-4">Payment Method</h1>
            <hr />

            <h4 className="mt-4 mb-4 ">Select Payment Method</h4>
            <div className="grid gap-10 mt-2.5 cards">
              <button
                className="flex items-center gap-2 px-2.5 py-2.5 border-2 border-[rgb(229,230,190)] rounded-[10px] bg-[rgb(28,28,29)] btn text-[rgb(229,230,190)] hover:bg-[rgb(229,230,190)] hover:text-[rgb(28,28,29)]"
                type="button"
              >
                <FaPaypal /> Paypal
              </button>
              <button
                className="flex items-center gap-2  px-2.5 py-2.5 border-2 border-[rgb(229,230,190)] rounded-[10px] bg-[rgb(28,28,29)] btn text-[rgb(229,230,190)] hover:bg-[rgb(229,230,190)] hover:text-[rgb(28,28,29)]"
                type="button"
              >
                <FaCreditCard /> Credit Card
              </button>
              <button
                className="flex items-center gap-2 px-2.5 py-2.5 border-2 border-[rgb(229,230,190)] rounded-[10px] bg-[rgb(28,28,29)] btn text-[rgb(229,230,190)] hover:bg-[rgb(229,230,190)] hover:text-[rgb(28,28,29)]"
                type="button"
              >
                <FaMoneyBillWave /> Paytm
              </button>
              <button
                className="flex items-center gap-2  px-2.5 py-2.5 border-2 border-[rgb(229,230,190)] rounded-[10px] bg-[rgb(28,28,29)] btn text-[rgb(229,230,190)] hover:bg-[rgb(229,230,190)] hover:text-[rgb(28,28,29)]"
                type="button"
              >
                <FaMoneyBillWave /> Cash on Arrival
              </button>
            </div>

            {/* Card number & Holder */}
            <div className="grid justify-between gap-5 mt-6 check">
              <div>
                <label className="block">Card Number</label>
                <div className="relative mt-2.5">
                  <FaCreditCard className="absolute left-3 top-1/2 -translate-y-1/2 text-yellow-400 text-xl" />
                  <input
                    type="number"
                    name="cardNumber"
                    required
                    value={formData.cardNumber}
                    onChange={handleChange}
                    placeholder="Card Number"
                    className=" p-2.5 border w-[300px] rounded-[10px] cursor-pointer pl-12"
                  />
                </div>
              </div>

              <div>
                <label className="block">Card Holder Name</label>
                <div className="relative mt-2.5">
                  <FaIdCard className="absolute left-3 top-1/2 -translate-y-1/2 text-yellow-400 text-xl" />
                  <input
                    type="text"
                    name="holderName"
                    required
                    value={formData.holderName}
                    onChange={handleChange}
                    placeholder="Card Owner Name"
                    className=" p-2.5 border w-[300px] rounded-[10px] pl-12"
                  />
                </div>
              </div>
            </div>

            {/* Expire date / CVV */}

            <div className="grid justify-between gap-5  mt-6 check">
              <div>
                <label className="block">CVV</label>
                <div className="relative mt-2.5">
                  <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-yellow-400 text-xl" />
                  <input
                    type="text"
                    name="cvv"
                    required
                    value={formData.cvv}
                    placeholder="CVV Number"
                    minLength={3}
                    maxLength={3}
                    pattern="\d{3}"
                    onChange={handleChange}
                    className="p-2.5 border w-[300px] rounded-[10px] pl-12"
                  />
                </div>
              </div>
              <div>
                <label className="block">Expire Date</label>
                <div className="relative mt-2.5">
                  <FaRegCalendarAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-yellow-400 text-xl" />
                  <input
                    type="date"
                    name="expireDate"
                    required
                    value={formData.expireDate}
                    onChange={handleChange}
                    className=" p-2.5 border w-[300px] rounded-[10px] cursor-pointer pl-12"
                  />
                </div>
              </div>

              
            </div>
          </div>

          {/* CARD 4: Additional Services */}
          <div className=" p-[25px] mb-10 rounded-[15px] max-w-[350px] bg-[rgba(255,255,255,0.05)] cardSection">
            <h1 className="mb-4">Additional Services</h1>
            <hr />

            <div className="grid justify-between gap-5  mt-6 checkyou">
              <div className="p-[10px_20px] bg-[rgb(28,28,29)] border-2 border-[rgb(229,230,190)] rounded-[10px] checkbox w-[300px]">
                <label>
                  <input type="checkbox" name="airportPickup" className="mr-2 " /> Airport Pickup
                </label>
              </div>

              <div className="p-[10px_20px] bg-[rgb(28,28,29)] border-2 border-[rgb(229,230,190)] rounded-[10px] checkbox">
                <label>
                  <input type="checkbox" name="breakfast" className="mr-2" /> Breakfast Included
                </label>
              </div>

              <div className="p-[10px_20px] bg-[rgb(28,28,29)] border-2 border-[rgb(229,230,190)] rounded-[10px] checkbox">
                <label>
                  <input type="checkbox" name="playground" className="mr-2" /> Playground Included
                </label>
              </div>

              <div className="p-[10px_20px] bg-[rgb(28,28,29)] border-2 border-[rgb(229,230,190)] rounded-[10px] checkbox">
                <label>
                  <input type="checkbox" name="dinner" className="mr-2" /> Dinner Included
                </label>
              </div>
            </div>

            <div className=" max-sm:hidden grid justify-between gap-5 mt-6 checkyou">
              <div className="p-[10px_20px] bg-[rgb(28,28,29)] border-2 border-[rgb(229,230,190)] rounded-[10px] checkbox">
                <label>
                  <input type="checkbox" name="gym" className="mr-2" /> Gym Access
                </label>
              </div>

              <div className="p-[10px_20px] bg-[rgb(28,28,29)] border-2 border-[rgb(229,230,190)] rounded-[10px] checkbox">
                <label>
                  <input type="checkbox" name="laundry" className="mr-2" /> Laundry Included
                </label>
              </div>

              <div className="p-[10px_20px] bg-[rgb(28,28,29)] border-2 border-[rgb(229,230,190)] rounded-[10px] checkbox">
                <label>
                  <input type="checkbox" name="shower" className="mr-2" /> Hot Shower
                </label>
              </div>

              <div className="p-[10px_20px] bg-[rgb(28,28,29)] border-2 border-[rgb(229,230,190)] rounded-[10px] checkbox">
                <label>
                  <input type="checkbox" name="roomService" className="mr-2" /> 24/7 Room Service
                </label>
              </div>
            </div>

            <h4 className="mt-6 mb-2">Special Request</h4>
            <div className="relative">
              <FaRegBell className="absolute left-3 top-11 text-yellow-400 text-xl" />
              <textarea
                name="specialRequest"
                placeholder="Any thing You want to say!"
                className="p-10 border w-full rounded-[10px] pl-12 truncate"
                value={formData.specialRequest}
                onChange={handleChange}
              />
            </div>

            <h4 className="mt-6 mb-2">Upload ID Proof</h4>
            <div className="relative">
              <FaUpload className="absolute left-3 top-4 text-yellow-400 text-xl" />
              <input
                type="file"
                name="idProof"
                accept=".jpg,.jpeg,.png"
                onChange={handleChange}
                className="p-[10px_20px] border-[3px] border-dotted border-[greenyellow] rounded-[10px] w-full cursor-pointer pl-12"
              />
            </div>
            <p>Accepted Formats: .jpg, .jpeg, .png</p>
          </div>

          <div className="flex items-center justify-center mt-6 mb-10 gap-10 confirmbtn">
            <button
              type="button"
              className="bg-red-600 px-2.5 py-2.5 w-20  hover:bg-red-700 rounded-lg font-bold text-white confirmbtn1 truncate"
              onClick={handleResetClick}
            >
              Reset 
            </button>
            <button type="submit" className="bg-green-600 rounded-lg w-20 hover:bg-green-800 px-2.5 py-2.5 font-bold text-white confirmbtn2">
              Confirm 
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
