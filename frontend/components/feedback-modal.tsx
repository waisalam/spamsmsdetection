"use client";

import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Loader2, MessageSquarePlus } from "lucide-react";

const FEEDBACK_TYPES = [
  { value: "bug", label: "Bug" },
  { value: "feature", label: "Feature Request" },
  { value: "other", label: "Other" },
] as const;

type FeedbackType = (typeof FEEDBACK_TYPES)[number]["value"];

interface FeedbackFormData {
  type: FeedbackType;
  description: string;
  email: string;
}

const initialFormData: FeedbackFormData = {
  type: "other",
  description: "",
  email: "",
};

export default function FeedbackModal() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FeedbackFormData>(initialFormData);
  const { toast } = useToast();

  const handleClose = useCallback(() => {
    setOpen(false);
    setFormData(initialFormData);
  }, []);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      if (!formData.description.trim()) {
        toast({
          variant: "destructive",
          title: "Validation Error",
          description: "Description is required.",
        });
        return;
      }

      setLoading(true);

      try {
        const response = await fetch("/feedback", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            type: formData.type,
            description: formData.description.trim(),
            email: formData.email.trim() || undefined,
          }),
        });

        if (!response.ok) {
          const errorData = await response.json().catch(() => null);
          throw new Error(
            errorData?.message || `Request failed with status ${response.status}`
          );
        }

        toast({
          title: "Feedback Submitted",
          description: "Thank you for your feedback!",
        });

        handleClose();
      } catch (error) {
        const message =
          error instanceof Error ? error.message : "An unexpected error occurred";
        toast({
          variant: "destructive",
          title: "Submission Failed",
          description: message,
        });
      } finally {
        setLoading(false);
      }
    },
    [formData, handleClose, toast]
  );

  const handleTypeChange = useCallback((value: string) => {
    setFormData((prev) => ({ ...prev, type: value as FeedbackType }));
  }, []);

  const handleDescriptionChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setFormData((prev) => ({ ...prev, description: e.target.value }));
    },
    []
  );

  const handleEmailChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({ ...prev, email: e.target.value }));
    },
    []
  );

  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button
              size="lg"
              className="h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-shadow"
              aria-label="Open feedback form"
            >
              <MessageSquarePlus className="h-6 w-6" />
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Send Feedback</DialogTitle>
              <DialogDescription>
                Help us improve by sharing your thoughts.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="feedback-type">Type</Label>
                  <Select
                    value={formData.type}
                    onValueChange={handleTypeChange}
                    disabled={loading}
                  >
                    <SelectTrigger id="feedback-type">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      {FEEDBACK_TYPES.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="feedback-description">Description</Label>
                  <Textarea
                    id="feedback-description"
                    placeholder="Describe your feedback in detail..."
                    value={formData.description}
                    onChange={handleDescriptionChange}
                    disabled={loading}
                    rows={5}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="feedback-email">
                    Email <span className="text-muted-foreground">(optional)</span>
                  </Label>
                  <Input
                    id="feedback-email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleEmailChange}
                    disabled={loading}
                  />
                </div>
              </div>
              <DialogFooter>
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleClose}
                  disabled={loading}
                >
                  Cancel
                </Button>
                <Button type="submit" disabled={loading}>
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit"
                  )}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}