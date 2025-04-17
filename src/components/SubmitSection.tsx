
import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Upload } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const SubmitSection: React.FC = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [submissionType, setSubmissionType] = useState('story');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Submission Received",
        description: "Thank you for sharing your content with JamboKenya!",
        duration: 5000,
      });
      
      // Reset form here if needed
    }, 1500);
  };
  
  return (
    <section id="submit" className="py-20 bg-sand pattern-overlay">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-forest mb-4">
              {t('submit.title')}
            </h2>
            <p className="text-lg text-clay max-w-2xl mx-auto">
              {t('submit.description')}
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-sand p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">{t('submit.name')}</Label>
                  <Input id="name" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">{t('submit.email')}</Label>
                  <Input id="email" type="email" required />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="type">{t('submit.type')}</Label>
                <Select 
                  defaultValue="story" 
                  onValueChange={(value) => setSubmissionType(value)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select submission type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="story">{t('submit.story')}</SelectItem>
                    <SelectItem value="artwork">{t('submit.artwork')}</SelectItem>
                    <SelectItem value="photo">{t('submit.photo')}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              {submissionType === 'story' ? (
                <div className="space-y-2">
                  <Label htmlFor="content">{t('submit.content')}</Label>
                  <Textarea id="content" rows={6} required />
                </div>
              ) : (
                <div className="space-y-2">
                  <Label htmlFor="file">Upload {submissionType}</Label>
                  <div className="border-2 border-dashed border-muted-foreground/20 rounded-lg p-8 text-center">
                    <div className="flex flex-col items-center">
                      <Upload className="h-10 w-10 text-muted-foreground mb-2" />
                      <p className="text-sm text-muted-foreground mb-2">
                        Drag and drop your file here or click to browse
                      </p>
                      <input
                        id="file"
                        type="file"
                        className="hidden"
                        accept={submissionType === 'artwork' ? 'image/*' : 'image/*,video/*'}
                      />
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => document.getElementById('file')?.click()}
                      >
                        Select File
                      </Button>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Maximum file size: 10MB. Accepted formats: {submissionType === 'artwork' ? 'JPG, PNG, SVG' : 'JPG, PNG, MP4'}
                  </p>
                </div>
              )}
              
              <div className="pt-4">
                <Button 
                  type="submit" 
                  className="w-full bg-terracotta hover:bg-terracotta/90 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : t('submit.button')}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubmitSection;
