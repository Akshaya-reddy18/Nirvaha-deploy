import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useAuth } from '../../contexts/AuthContext';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Camera, Save, User, Mail, Smartphone, Calendar, MapPin, GraduationCap, Activity } from 'lucide-react';
import { toast } from 'sonner';

const profileSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email' }),
  mobile: z.string().min(10, { message: 'Please enter a valid phone number' }),
  age: z.coerce.number().min(13, { message: 'You must be at least 13 years old' }),
  gender: z.string().min(1, { message: 'Please select a gender' }),
  address: z.string().optional(),
  education: z.string().optional(),
  healthCondition: z.string().optional(),
  goals: z.array(z.string()).min(1, { message: 'Select at least one goal' }),
  preferredTime: z.string().min(1, { message: 'Select your preferred time' }),
});

type ProfileFormValues = z.infer<typeof profileSchema>;

const GOAL_OPTIONS = [
  'Stress Management',
  'Better Sleep',
  'Anxiety Relief',
  'Mindfulness',
  'Focus & Concentration',
  'Emotional Balance',
  'Spiritual Growth',
];

const TIME_PREFERENCES = [
  'Morning (5 AM - 11 AM)',
  'Afternoon (11 AM - 4 PM)',
  'Evening (4 PM - 9 PM)',
  'Night (9 PM - 5 AM)',
];

const ProfilePage = () => {
  const { user, updateProfile } = useAuth();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>('');
  const [isSaving, setIsSaving] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: user?.name || '',
      email: user?.email || '',
      mobile: user?.mobile || '',
      age: user?.age ? parseInt(user.age) : undefined,
      gender: user?.gender || '',
      address: user?.address || '',
      education: user?.education || '',
      healthCondition: user?.healthCondition || '',
      goals: user?.goals || [],
      preferredTime: user?.preferredTime || '',
    },
  });

  const selectedGoals = watch('goals') || [];

  useEffect(() => {
    // Load any existing profile picture
    if (user?.photoURL) {
      setPreviewUrl(user.photoURL);
    }
  }, [user]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const toggleGoal = (goal: string) => {
    setValue(
      'goals',
      selectedGoals.includes(goal)
        ? selectedGoals.filter((g) => g !== goal)
        : [...selectedGoals, goal],
      { shouldValidate: true }
    );
  };

  const onSubmit = async (data: ProfileFormValues) => {
    setIsSaving(true);
    try {
      // In a real app, you would upload the file to a storage service here
      // and then update the user's profile with the download URL
      
      // For now, we'll just update the profile with the form data
      await updateProfile({
        ...data,
        // Include the photoURL if we have one
        ...(previewUrl && { photoURL: previewUrl }),
      });
      
      toast.success('Profile updated successfully!');
    } catch (error) {
      console.error('Error updating profile:', error);
      toast.error('Failed to update profile. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        {/* Profile Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-center gap-6">
            <div className="relative group">
              <Avatar className="w-24 h-24 border-4 border-[#1A1F1F] group-hover:border-[#00FFC6] transition-colors duration-300">
                <AvatarImage src={previewUrl} alt={user?.name || 'User'} />
                <AvatarFallback className="bg-gradient-to-br from-[#00FFC6] to-[#1ED5A6] text-2xl font-bold text-[#0A0F0F]">
                  {user?.name?.[0]?.toUpperCase() || 'U'}
                </AvatarFallback>
              </Avatar>
              <label
                htmlFor="profile-picture"
                className="absolute -bottom-2 -right-2 bg-[#00FFC6] text-[#0A0F0F] p-2 rounded-full cursor-pointer hover:bg-[#1ED5A6] transition-colors"
              >
                <Camera className="w-4 h-4" />
                <input
                  id="profile-picture"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </label>
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-white">{user?.name || 'User'}</h1>
              <p className="text-[#A1A1AA] flex items-center gap-2">
                <Mail className="w-4 h-4" />
                {user?.email || 'No email provided'}
              </p>
            </div>
          </div>
          <Button
            type="submit"
            form="profile-form"
            className="bg-gradient-to-r from-[#00FFC6] to-[#1ED5A6] hover:opacity-90 text-[#0A0F0F] font-medium gap-2"
            disabled={isSaving}
          >
            <Save className="w-4 h-4" />
            {isSaving ? 'Saving...' : 'Save Changes'}
          </Button>
        </div>

        {/* Profile Form */}
        <form id="profile-form" onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-[#111717] rounded-2xl p-6 border border-[#1A1F1F]"
          >
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <User className="w-5 h-5 text-[#00FFC6]" />
              Personal Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name" className="text-[#A1A1AA]">
                  Full Name
                </Label>
                <div className="relative mt-1">
                  <Input
                    id="name"
                    type="text"
                    className={`bg-[#1A1F1F] border-[#2D3436] focus:border-[#00FFC6] focus:ring-[#00FFC6] ${errors.name ? 'border-red-500' : ''}`}
                    {...register('name')}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                  )}
                </div>
              </div>
              
              <div>
                <Label htmlFor="email" className="text-[#A1A1AA]">
                  Email Address
                </Label>
                <div className="relative mt-1">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-4 w-4 text-[#6B7280]" />
                  </div>
                  <Input
                    id="email"
                    type="email"
                    className={`pl-10 bg-[#1A1F1F] border-[#2D3436] focus:border-[#00FFC6] focus:ring-[#00FFC6] ${errors.email ? 'border-red-500' : ''}`}
                    {...register('email')}
                    disabled
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="mobile" className="text-[#A1A1AA] flex items-center gap-1">
                  <Smartphone className="w-4 h-4" />
                  Mobile Number
                </Label>
                <div className="relative mt-1">
                  <Input
                    id="mobile"
                    type="tel"
                    className={`bg-[#1A1F1F] border-[#2D3436] focus:border-[#00FFC6] focus:ring-[#00FFC6] ${errors.mobile ? 'border-red-500' : ''}`}
                    {...register('mobile')}
                  />
                  {errors.mobile && (
                    <p className="mt-1 text-sm text-red-500">{errors.mobile.message}</p>
                  )}
                </div>
              </div>

              <div>
                <Label htmlFor="age" className="text-[#A1A1AA] flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  Age
                </Label>
                <div className="relative mt-1">
                  <Input
                    id="age"
                    type="number"
                    min="13"
                    max="120"
                    className={`bg-[#1A1F1F] border-[#2D3436] focus:border-[#00FFC6] focus:ring-[#00FFC6] ${errors.age ? 'border-red-500' : ''}`}
                    {...register('age', { valueAsNumber: true })}
                  />
                  {errors.age && (
                    <p className="mt-1 text-sm text-red-500">{errors.age.message}</p>
                  )}
                </div>
              </div>

              <div>
                <Label htmlFor="gender" className="text-[#A1A1AA]">
                  Gender
                </Label>
                <div className="mt-1">
                  <select
                    id="gender"
                    className={`w-full bg-[#1A1F1F] border border-[#2D3436] rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-[#00FFC6] focus:border-transparent ${errors.gender ? 'border-red-500' : ''}`}
                    {...register('gender')}
                  >
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="non-binary">Non-binary</option>
                    <option value="other">Other</option>
                    <option value="prefer-not-to-say">Prefer not to say</option>
                  </select>
                  {errors.gender && (
                    <p className="mt-1 text-sm text-red-500">{errors.gender.message}</p>
                  )}
                </div>
              </div>

              <div>
                <Label htmlFor="address" className="text-[#A1A1AA] flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  Address
                </Label>
                <div className="mt-1">
                  <Input
                    id="address"
                    type="text"
                    className="bg-[#1A1F1F] border-[#2D3436] focus:border-[#00FFC6] focus:ring-[#00FFC6]"
                    {...register('address')}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="education" className="text-[#A1A1AA] flex items-center gap-1">
                  <GraduationCap className="w-4 h-4" />
                  Education
                </Label>
                <div className="mt-1">
                  <Input
                    id="education"
                    type="text"
                    className="bg-[#1A1F1F] border-[#2D3436] focus:border-[#00FFC6] focus:ring-[#00FFC6]"
                    {...register('education')}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="healthCondition" className="text-[#A1A1AA] flex items-center gap-1">
                  <Activity className="w-4 h-4" />
                  Health Condition (Optional)
                </Label>
                <div className="mt-1">
                  <Input
                    id="healthCondition"
                    type="text"
                    className="bg-[#1A1F1F] border-[#2D3436] focus:border-[#00FFC6] focus:ring-[#00FFC6]"
                    placeholder="E.g., Anxiety, Insomnia, etc."
                    {...register('healthCondition')}
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-[#111717] rounded-2xl p-6 border border-[#1A1F1F]"
          >
            <h2 className="text-xl font-bold text-white mb-6">Wellness Goals</h2>
            <p className="text-[#A1A1AA] mb-4">Select your top wellness goals (select up to 3)</p>
            <div className="flex flex-wrap gap-3">
              {GOAL_OPTIONS.map((goal) => (
                <button
                  key={goal}
                  type="button"
                  onClick={() => toggleGoal(goal)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedGoals.includes(goal)
                      ? 'bg-gradient-to-r from-[#00FFC6] to-[#1ED5A6] text-[#0A0F0F]'
                      : 'bg-[#1A1F1F] text-[#E5E7EB] hover:bg-[#2D3436]'
                  }`}
                >
                  {goal}
                </button>
              ))}
            </div>
            {errors.goals && (
              <p className="mt-2 text-sm text-red-500">{errors.goals.message}</p>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-[#111717] rounded-2xl p-6 border border-[#1A1F1F]"
          >
            <h2 className="text-xl font-bold text-white mb-6">Preferences</h2>
            <div className="space-y-4">
              <div>
                <Label className="text-[#A1A1AA] block mb-2">Preferred Practice Time</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                  {TIME_PREFERENCES.map((time) => (
                    <label
                      key={time}
                      className={`flex items-center p-3 rounded-lg border transition-colors cursor-pointer ${
                        watch('preferredTime') === time
                          ? 'border-[#00FFC6] bg-[#00FFC6]/10'
                          : 'border-[#2D3436] hover:border-[#4A5568]'
                      }`}
                    >
                      <input
                        type="radio"
                        className="form-radio h-4 w-4 text-[#00FFC6] focus:ring-[#00FFC6] border-[#4A5568]"
                        value={time}
                        {...register('preferredTime')}
                      />
                      <span className="ml-2 text-white">{time}</span>
                    </label>
                  ))}
                </div>
                {errors.preferredTime && (
                  <p className="mt-2 text-sm text-red-500">{errors.preferredTime.message}</p>
                )}
              </div>
            </div>
          </motion.div>
        </form>

        {/* Danger Zone */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-[#1A1F1F] border border-red-500/30 rounded-2xl p-6"
        >
          <h2 className="text-xl font-bold text-red-400 mb-4">Danger Zone</h2>
          <div className="space-y-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div>
                <h3 className="font-medium text-white">Delete Account</h3>
                <p className="text-sm text-[#A1A1AA] mt-1">
                  Permanently delete your account and all associated data
                </p>
              </div>
              <Button
                variant="destructive"
                className="mt-2 md:mt-0"
                onClick={() => {
                  if (confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
                    // Handle account deletion
                    toast.error('Account deletion is not implemented yet');
                  }
                }}
              >
                Delete Account
              </Button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProfilePage;
