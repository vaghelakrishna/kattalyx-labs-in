import { useState, useEffect } from 'react';

export interface Module {
  _id: string;
  title: string;
  description: string;
  image?: string;
  duration?: number;
  durationMinutes?: number;
  students?: number;
  [key: string]: unknown;
}

export function useModules(limit?: number) {
  const [modules, setModules] = useState<Module[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchModules = async () => {
      setLoading(true);
      try {
        // Replace this stub with a real API call as needed.
        const data: Module[] = [
          {
            _id: 'module-1',
            title: 'AI & Machine Learning',
            description: 'From fundamentals to real-world applications with industry practitioners.',
            image:
              'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            durationMinutes: 60,
            students: 2500,
          },
          {
            _id: 'module-2',
            title: 'Entrepreneurship',
            description: 'Learn from founders who built successful companies from scratch.',
            image:
              'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            durationMinutes: 50,
            students: 1800,
          },
          {
            _id: 'module-3',
            title: 'Cybersecurity',
            description: 'Practical security skills taught by industry security experts.',
            image:
              'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            durationMinutes: 45,
            students: 1200,
          },
        ];

        setModules(limit ? data.slice(0, limit) : data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch modules');
      } finally {
        setLoading(false);
      }
    };

    fetchModules();
  }, [limit]);

  return { modules, loading, error };
}
