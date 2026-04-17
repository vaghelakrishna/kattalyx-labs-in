import React, { useState } from 'react';
import { dashboardAPI } from '../services/api';

const EventTestComponent: React.FC = () => {
  const [status, setStatus] = useState<string>('');

  const testCreateEvent = async () => {
    setStatus('Creating test event...');
    try {
      const testEvent = {
        title: 'Test Event',
        description: 'This is a test event created from the admin dashboard',
        category: 'Workshop',
        durationMinutes: 60,
        location: 'Online',
        organizerName: 'Test Organizer'
      };

      const response = await dashboardAPI.createEvent(testEvent);
      setStatus('✅ Event created successfully! ID: ' + response.data.data.event._id);
      console.log('Event created:', response.data);
    } catch (error) {
      const errorMessage = error instanceof Error 
        ? error.message 
        : (error as { response?: { data?: { message?: string } } })?.response?.data?.message || 'Unknown error';
      setStatus('❌ Error: ' + errorMessage);
      console.error('Event creation failed:', error);
    }
  };

  const testGetEvents = async () => {
    setStatus('Fetching events...');
    try {
      const response = await dashboardAPI.getEvents();
      setStatus('✅ Fetched ' + (response.data.data.events?.length || 0) + ' events');
      console.log('Events fetched:', response.data);
    } catch (error) {
      const errorMessage = error instanceof Error 
        ? error.message 
        : (error as { response?: { data?: { message?: string } } })?.response?.data?.message || 'Unknown error';
      setStatus('❌ Error fetching events: ' + errorMessage);
      console.error('Events fetch failed:', error);
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-sm border space-y-4">
      <h3 className="text-lg font-semibold">Event API Testing</h3>
      <div className="flex gap-4">
        <button 
          onClick={testCreateEvent}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Test Create Event
        </button>
        <button 
          onClick={testGetEvents}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Test Get Events
        </button>
      </div>
      {status && (
        <div className="mt-4 p-3 bg-gray-100 rounded">
          <strong>Status:</strong> {status}
        </div>
      )}
    </div>
  );
};

export default EventTestComponent;